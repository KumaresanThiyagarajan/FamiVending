import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog-header">
          <span className="section-label" style={{ color: 'var(--primary-red)' }}>OUR PRESS</span>
          <h2 className="section-title">
            <strong>Latest Posts</strong> From Our Press
          </h2>
        </div>

        <div className="blog-carousel">
          <button className="carousel-btn carousel-prev" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>

          <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-card-image">
                <div className="placeholder-inner" style={{ height: '200px', background: 'linear-gradient(135deg, #f0f0f0, #ddd)' }}>
                  <span>Blog Post Image</span>
                </div>
              </div>
              <div className="blog-card-content">
                <span className="blog-date">March 2026</span>
                <h3>Smart Vending Solutions for Modern Business</h3>
                <p>Discover how automated vending machines are transforming the retail landscape...</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-image">
                <div className="placeholder-inner" style={{ height: '200px', background: 'linear-gradient(135deg, #f0f0f0, #ddd)' }}>
                  <span>Blog Post Image</span>
                </div>
              </div>
              <div className="blog-card-content">
                <span className="blog-date">February 2026</span>
                <h3>The Future of Touchscreen Vending</h3>
                <p>Interactive touchscreen technology brings a new dimension to vending operations...</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-image">
                <div className="placeholder-inner" style={{ height: '200px', background: 'linear-gradient(135deg, #f0f0f0, #ddd)' }}>
                  <span>Blog Post Image</span>
                </div>
              </div>
              <div className="blog-card-content">
                <span className="blog-date">January 2026</span>
                <h3>Healthy Snacking On The Go</h3>
                <p>How vending machines are evolving to offer healthier food options for consumers...</p>
              </div>
            </div>
          </div>

          <button className="carousel-btn carousel-next" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,6 15,12 9,18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
