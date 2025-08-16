import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../utils/markdownUtils';
import { getAllPosts } from '../utils/markdownUtils';
import '../styles/BlogPage.css';

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getAllPosts();
        setBlogPosts(posts);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="blog-container">
          <h1 className="blog-title">My Blog</h1>
          <p>Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1>Blog</h1>
        
        {loading ? (
          <div className="loading">Loading posts...</div>
        ) : blogPosts.length === 0 ? (
          <div className="no-posts">No blog posts found.</div>
        ) : (
          <div className="posts-list">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-post-card">
                <h2 className="post-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
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
                {post.excerpt && (
                  <div className="post-excerpt">
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read more →
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;