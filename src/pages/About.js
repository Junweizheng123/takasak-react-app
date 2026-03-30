import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <Link to="/" className="back-link">← Back to home</Link>
      <h2>About</h2>
      <div className="about-content">
        <p>Welcome to my blog!</p>
        <p>
          My name is <strong>June Zheng</strong>. I'm passionate about learning, 
          technology, and personal development.
        </p>
        <p>
          This site was originally built with WordPress and has been converted 
          to a modern React application.
        </p>
        <h3>What I write about:</h3>
        <ul>
          <li>Computer programming and web development</li>
          <li>Language learning and education</li>
          <li>Personal goals and self-improvement</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
