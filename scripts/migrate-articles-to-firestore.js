// Script para migrar artículos de archivos .md a Firestore
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Inicializar Firebase Admin
let privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (privateKey) {
  if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    try {
      privateKey = JSON.parse(privateKey);
    } catch (e) {
      privateKey = privateKey.slice(1, -1);
    }
  }
  privateKey = privateKey.replace(/\\n/g, '\n');
}

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: privateKey,
};

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

// Función para parsear frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content };
  }

  const [, frontmatterString, bodyContent] = match;
  const frontmatter = {};

  frontmatterString.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes
      if ((value.startsWith("'") && value.endsWith("'")) ||
          (value.startsWith('"') && value.endsWith('"'))) {
        value = value.slice(1, -1);
      }

      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item =>
          item.trim().replace(/^["']|["']$/g, '')
        ).filter(item => item.length > 0);
      }

      // Parse numbers
      if (!isNaN(value) && value !== '' && !Array.isArray(value)) {
        value = Number(value);
      }

      frontmatter[key] = value;
    }
  });

  return { frontmatter, content: bodyContent.trim() };
}

// Función principal de migración
async function migrateArticles() {
  try {
    const blogDir = join(process.cwd(), 'src', 'content', 'blog');

    if (!existsSync(blogDir)) {
      console.error('❌ Directorio de blog no encontrado:', blogDir);
      return;
    }

    const files = await readdir(blogDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));

    console.log(`\n📚 Encontrados ${markdownFiles.length} archivos .md para migrar\n`);

    let migrated = 0;
    let skipped = 0;
    let errors = 0;

    for (const filename of markdownFiles) {
      try {
        const filePath = join(blogDir, filename);
        const content = await readFile(filePath, 'utf8');
        const { frontmatter, content: bodyContent } = parseFrontmatter(content);

        const slug = filename.replace(/\.md$/, '');

        // Verificar si ya existe
        const articleRef = db.collection('articles').doc(slug);
        const existingDoc = await articleRef.get();

        if (existingDoc.exists) {
          console.log(`⏭️  Saltado: ${slug} (ya existe en Firestore)`);
          skipped++;
          continue;
        }

        // Preparar documento para Firestore
        const articleDoc = {
          title: frontmatter.title || 'Sin título',
          description: frontmatter.description || '',
          content: bodyContent,
          tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
          heroImage: frontmatter.heroImage || '/images/banner-web-1.png',
          author: frontmatter.author || 'Admin',
          pubDate: frontmatter.pubDate || new Date().toISOString(),
          status: frontmatter.pubDate ? 'published' : 'draft',
          initialLikes: frontmatter.initialLikes || 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        // Guardar en Firestore
        await articleRef.set(articleDoc);

        console.log(`✅ Migrado: ${slug} (${articleDoc.status})`);
        migrated++;

      } catch (error) {
        console.error(`❌ Error migrando ${filename}:`, error.message);
        errors++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`📊 RESUMEN DE MIGRACIÓN`);
    console.log('='.repeat(50));
    console.log(`✅ Migrados exitosamente: ${migrated}`);
    console.log(`⏭️  Saltados (ya existían): ${skipped}`);
    console.log(`❌ Errores: ${errors}`);
    console.log('='.repeat(50) + '\n');

    if (migrated > 0) {
      console.log('🎉 ¡Migración completada! Los artículos están ahora en Firestore.');
      console.log('👉 Puedes verificarlos en Firebase Console → Firestore → articles\n');
    }

  } catch (error) {
    console.error('❌ Error general en la migración:', error);
  }
}

// Ejecutar migración
console.log('\n🚀 Iniciando migración de artículos .md a Firestore...\n');
migrateArticles()
  .then(() => {
    console.log('✨ Script completado.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });
