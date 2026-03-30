import React from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/posts.json';

function Post() {
  const { slug } = useParams();
  const post = postsData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="post-page">
        <h2>Post not found</h2>
        <Link to="/">← Back to home</Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="post-page">
      <Link to="/" className="back-link">← Back to home</Link>
      <article className="post-single">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{formatDate(post.date)}</span>
            <span className="post-author"> by {post.author.name}</span>
          </div>
        </header>
        <div 
          className="post-content" 
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

export default Post;
