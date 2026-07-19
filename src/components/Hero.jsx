import React, { useState, useEffect } from 'react';
import './Hero.css';

const carouselImages = [
  { src: '/product-1.png', alt: 'Fami Vending 22 inch Smart Combo Vending Machine with interactive touchscreen advertisement display' },
  { src: '/product2.png', alt: 'Fami Vending 10 inch Smart Combo Vending Machine for automated snack and beverage retail' },
  { src: '/product3.png', alt: 'Fami Vending 10C Compact Combo Vending Machine for space-saving smart beverage dispensing' }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-label">BEST IN CLASS</span>
          <h1 className="hero-title">
            <span className="gradient-text">Vending<br />Machine</span>
            <br />
            with Smart Tech
          </h1>
          <p className="hero-description">
            Transforming food-based services into the technological society to improve the mass distribution ideology.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Our Products</a>
            <a href="#about" className="btn btn-secondary">
              <span className="btn-icon">🎯</span>
              Fami's Special
            </a>
          </div>
        </div>
        
        <div className="hero-carousel-wrapper">
          <div className="hero-carousel">
            {carouselImages.map((img, idx) => {
              let positionClass = '';
              if (idx === currentIndex) positionClass = 'active';
              else if (idx === (currentIndex - 1 + carouselImages.length) % carouselImages.length) positionClass = 'prev';
              else positionClass = 'next';
              
              return (
                <div 
                  key={idx} 
                  className={`carousel-slide ${positionClass}`}
                  onClick={() => {
                    if (positionClass === 'prev') handlePrev();
                    if (positionClass === 'next') handleNext();
                  }}
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              );
            })}
          </div>
          <div className="carousel-indicators">
            {carouselImages.map((_, idx) => (
              <span 
                key={idx} 
                className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
