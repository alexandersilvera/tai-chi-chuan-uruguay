// scripts/updateCategories.cjs
// Script para actualizar las categorías de los artículos

require('dotenv').config();
const admin = require('firebase-admin');

// Inicializar Firebase Admin
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Categorías nuevas permitidas
const NUEVAS_CATEGORIAS = [
  'Taiji Quan',
  'Xing Yi Quan',
  'Ba Gua Zhang',
  'Filosofía',
  'Biografías',
  'Cultura',
  'Noticias y Eventos'
];

// Mapeo de categorías antiguas a nuevas
const MAPEO_CATEGORIAS = {
  'Taiji Quan': 'Taiji Quan',
  'Sun Taiji Quan': 'Taiji Quan',
  'Práctica y Técnica': 'Taiji Quan',
  'Filosofía y Cultura': 'Filosofía',
  'Biografías': 'Biografías',
  'Noticias y Eventos': 'Noticias y Eventos',
};

async function listarCategoriasActuales() {
  console.log('\n📋 Categorías actuales en los artículos:\n');

  const articlesSnapshot = await db.collection('articles').get();
  const categoriasMap = new Map();

  articlesSnapshot.docs.forEach(doc => {
    const data = doc.data();
    if (Array.isArray(data.tags)) {
      data.tags.forEach(tag => {
        categoriasMap.set(tag, (categoriasMap.get(tag) || 0) + 1);
      });
    }
  });

  // Ordenar por cantidad
  const categorias = Array.from(categoriasMap.entries())
    .sort((a, b) => b[1] - a[1]);

  categorias.forEach(([cat, count]) => {
    console.log(`  - "${cat}": ${count} artículos`);
  });

  console.log(`\n📊 Total de categorías únicas: ${categorias.length}\n`);

  return categorias;
}

async function actualizarCategorias() {
  console.log('\n🔄 Iniciando actualización de categorías...\n');

  const articlesSnapshot = await db.collection('articles').get();
  let actualizados = 0;
  let errores = 0;

  for (const doc of articlesSnapshot.docs) {
    try {
      const data = doc.data();

      if (!Array.isArray(data.tags)) {
        console.log(`⚠️  ${doc.id}: No tiene tags, omitiendo...`);
        continue;
      }

      // Mapear categorías antiguas a nuevas
      const nuevasCategorias = data.tags
        .map(tag => MAPEO_CATEGORIAS[tag] || null)
        .filter(tag => tag !== null);

      // Eliminar duplicados
      const categoriasUnicas = [...new Set(nuevasCategorias)];

      // Si "Taiji Quan" no está en las categorías, agregarlo como categoría por defecto
      if (!categoriasUnicas.includes('Taiji Quan')) {
        categoriasUnicas.unshift('Taiji Quan');
      }

      console.log(`📝 ${doc.id}:`);
      console.log(`   Antiguo: [${data.tags.join(', ')}]`);
      console.log(`   Nuevo:   [${categoriasUnicas.join(', ')}]`);

      // Actualizar en Firestore
      await doc.ref.update({
        tags: categoriasUnicas,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      actualizados++;
    } catch (error) {
      console.error(`❌ Error actualizando ${doc.id}:`, error.message);
      errores++;
    }
  }

  console.log(`\n✅ Actualización completada:`);
  console.log(`   - Artículos actualizados: ${actualizados}`);
  console.log(`   - Errores: ${errores}\n`);
}

async function main() {
  try {
    // Primero mostrar las categorías actuales
    await listarCategoriasActuales();

    // Preguntar si desea continuar
    console.log('🎯 Categorías nuevas que se usarán:');
    NUEVAS_CATEGORIAS.forEach(cat => console.log(`   - ${cat}`));
    console.log('\n📋 Mapeo de categorías:');
    Object.entries(MAPEO_CATEGORIAS).forEach(([old, nuevo]) => {
      console.log(`   "${old}" → "${nuevo}"`);
    });

    console.log('\n⚠️  IMPORTANTE:');
    console.log('   - Todos los artículos tendrán al menos "Taiji Quan" como categoría');
    console.log('   - Las categorías "Práctica y Técnica" se convertirán a "Taiji Quan"');
    console.log('   - Las categorías "Filosofía y Cultura" se convertirán a "Filosofía"');
    console.log('   - "Sun Taiji Quan" se convertirá a "Taiji Quan"\n');

    // Ejecutar actualización
    await actualizarCategorias();

    // Mostrar categorías finales
    console.log('\n📋 Categorías después de la actualización:\n');
    await listarCategoriasActuales();

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();
