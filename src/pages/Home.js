import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/posts.json';

function Home() {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="home-page">
      <h2>Recent Posts</h2>
      <div className="posts-list">
        {postsData.map(post => (
          <article key={post.id} className="post-preview">
            <h3>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <div className="post-meta">
              <span className="post-date">{formatDate(post.date)}</span>
              <span className="post-author"> by {post.author.name}</span>
            </div>
            <div 
              className="post-excerpt" 
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <Link to={`/post/${post.slug}`} className="read-more">
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
