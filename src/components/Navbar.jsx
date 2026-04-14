import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <img src="/logo.png" alt="Fami Vending" className="navbar-logo-img" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blogs</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
