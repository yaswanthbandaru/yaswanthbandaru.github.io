import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import type { BlogPost } from '../utils/markdownUtils';
import { getPostBySlug } from '../utils/markdownUtils';
import '../styles/BlogPage.css';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('No post specified');
        setLoading(false);
        return;
      }

      try {
        const postData = await getPostBySlug(slug);
        if (!postData) {
          setError('Post not found');
        } else {
          setPost(postData);
        }
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load the blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="blog-container">
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-page">
        <div className="blog-container">
          <h1 className="blog-title">Error</h1>
          <p className="error-message">{error || 'Post not found'}</p>
          <Link to="/blog" className="back-link">← Back to all posts</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <article className="blog-post single-post">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {post.tags && post.tags.length > 0 && (
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <div className="post-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <div className="post-footer">
            <Link to="/blog" className="back-link">← Back to all posts</Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
