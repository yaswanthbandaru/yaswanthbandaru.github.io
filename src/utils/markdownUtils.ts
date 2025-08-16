// Define the structure of our blog post data
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

// Type for the frontmatter in markdown files
interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

// Get all blog posts
export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    // Import all markdown files from the posts directory
    const modules = import.meta.glob('../posts/*.md', { as: 'raw' });
    const posts: BlogPost[] = [];
    
    // Process each markdown file
    for (const path in modules) {
      try {
        const slug = path.replace('../posts/', '').replace('.md', '');
        const module = await modules[path]();
        
        // Parse frontmatter and content
        const content = module as string;
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        
        if (!frontmatterMatch) continue;
        
        const frontmatter: Frontmatter = {
          title: 'Untitled',
          date: new Date().toISOString(),
          excerpt: '',
          tags: []
        };
        
        // Parse frontmatter
        const frontmatterContent = frontmatterMatch[1];
        const contentBody = frontmatterMatch[2];
        
        frontmatterContent.split('\n').forEach(line => {
          const match = line.match(/(\w+):\s*(.*)/);
          if (match) {
            const key = match[1].trim();
            let value: any = match[2].trim().replace(/^['"](.*)['"]$/, '$1');
            
            // Handle array values (tags)
            if (key === 'tags') {
              value = value.replace(/[\[\]]/g, '')
                .split(',')
                .map((tag: string) => tag.trim().replace(/^['"]|['"]$/g, ''))
                .filter(Boolean);
            }
            
            if (key in frontmatter) {
              (frontmatter as any)[key] = value;
            }
          }
        });
        
        posts.push({
          slug,
          title: frontmatter.title,
          date: frontmatter.date,
          excerpt: frontmatter.excerpt,
          tags: frontmatter.tags || [],
          content: contentBody,
        });
      } catch (error) {
        console.error(`Error processing ${path}:`, error);
      }
    }

    // Sort posts by date in descending order (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading posts:', error);
    throw error;
  }
};

// Get a single blog post by its slug
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    // Import the specific markdown file
    const module = await import(`../posts/${slug}.md?raw`);
    const content = module.default as string;
    
    // Parse frontmatter and content
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    
    if (!frontmatterMatch) return null;
    
    const frontmatter: Frontmatter = {
      title: 'Untitled',
      date: new Date().toISOString(),
      excerpt: '',
      tags: []
    };
    
    // Parse frontmatter
    const frontmatterContent = frontmatterMatch[1];
    const contentBody = frontmatterMatch[2];
    
    frontmatterContent.split('\n').forEach(line => {
      const match = line.match(/(\w+):\s*(.*)/);
      if (match) {
        const key = match[1].trim();
        let value: any = match[2].trim().replace(/^['"](.*)['"]$/, '$1');
        
        // Handle array values (tags)
        if (key === 'tags') {
          value = value.replace(/[\[\]]/g, '')
            .split(',')
            .map((tag: string) => tag.trim().replace(/^['"]|['"]$/g, ''))
            .filter(Boolean);
        }
        
        if (key in frontmatter) {
          (frontmatter as any)[key] = value;
        }
      }
    });
    
    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      tags: frontmatter.tags || [],
      content: contentBody,
    };
  } catch (error) {
    console.error(`Error loading post with slug ${slug}:`, error);
    return null;
  }
};
