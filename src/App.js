import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1 className="site-title">
              <Link to="/">takasak</Link>
            </h1>
            <p className="site-tagline">Just another blog</p>
            <nav className="main-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </header>

        <main className="App-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:slug" element={<Post />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>

        <footer className="App-footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} June Zheng. Converted from WordPress to React.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
