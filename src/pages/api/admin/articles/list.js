import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const prerender = false;

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const [, frontmatterString, bodyContent] = match;
  const frontmatter = {};
  
  // Parse YAML-like frontmatter
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
      if (!isNaN(value) && value !== '') {
        value = Number(value);
      }
      
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: bodyContent.trim() };
}

function generateSlug(filename) {
  return filename.replace(/\.md$/, '');
}

export async function GET() {
  try {
    const blogDir = join(process.cwd(), 'src', 'content', 'blog');
    
    if (!existsSync(blogDir)) {
      return new Response(JSON.stringify({ articles: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const files = await readdir(blogDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    const articles = await Promise.all(
      markdownFiles.map(async (filename) => {
        const filePath = join(blogDir, filename);
        const content = await readFile(filePath, 'utf8');
        const { frontmatter } = parseFrontmatter(content);
        
        const slug = generateSlug(filename);
        
        // Calculate read time (rough estimate: 200 words per minute)
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);
        
        return {
          id: slug,
          title: frontmatter.title || 'Sin título',
          slug,
          description: frontmatter.description || '',
          author: frontmatter.author || 'Admin',
          publishDate: frontmatter.pubDate || null,
          lastModified: frontmatter.pubDate || null,
          status: frontmatter.pubDate ? 'published' : 'draft',
          tags: frontmatter.tags || [],
          readTime: `${readTime} min`,
          image: frontmatter.heroImage || '/images/banner-web-1.png',
          likes: frontmatter.initialLikes || 0,
          comments: 0, // TODO: Get from Firestore
          views: 0 // TODO: Get from analytics
        };
      })
    );
    
    // Sort by last modified (newest first)
    articles.sort((a, b) => {
      const dateA = new Date(a.lastModified || 0);
      const dateB = new Date(b.lastModified || 0);
      return dateB - dateA;
    });
    
    return new Response(JSON.stringify({ articles }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error listing articles:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to list articles',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}