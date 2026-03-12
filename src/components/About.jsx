import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="about-heading">About Fami Vending</h2>
          <p>
            Fashion Missile group of companies has started a new adventure, is firmly
            known as Fami Vending. It is based on leading edges concept to pan India. We
            are going exhaustive process from manufacturing dealing with research and
            development. An automated machine that is intended to provide the user with a
            diverse range of products: snacks, beverages, pizzas, cupcakes, newspapers,
            tickets, etc. A vending machine dispenses a product to the users based on the
            amount of money inserted and selection of the product vending is the act of
            selling goods of a customer. It is a type of marketing, merchandising, selling,
            and the exchange of goods for an agreed sum of money. Fami Vending provides
            smart vending machines to customers with a multifariousness of machines.
          </p>
        </div>
        <div className="about-right">
          <div className="about-logo-placeholder">
            <span className="logo-text-main" style={{ fontSize: '2rem', color: '#fff' }}>FAMI</span>
            <span className="logo-text-sub" style={{ fontSize: '1rem', color: '#fff' }}>VENDING</span>
            <span className="logo-text-tag" style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)' }}>MODERN BOX SHOP</span>
          </div>
          <blockquote className="about-quote">
            <p>"Technology is best when it brings people together."</p>
            <cite>PATRICIA CROSS</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
