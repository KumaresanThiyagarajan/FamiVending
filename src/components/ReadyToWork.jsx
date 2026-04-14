import React from 'react';
import './ReadyToWork.css';

const ReadyToWork = () => {
  return (
    <section className="ready-to-work">
      <div className="rtw-overlay"></div>
      <div className="container rtw-container">
        <div className="rtw-icon">
          <div className="rtw-pulse"></div>
        </div>
        <h2 className="rtw-title">Ready To Upgrade Your Vending Experience?</h2>
        <p className="rtw-text">
          We understand that our vending machines represent not only convenience but a reliable service for your business. We are dedicated to providing the best vending solutions tailored to your unique needs.
        </p>
        <button className="rtw-btn">Contact Us</button>
      </div>
    </section>
  );
};

export default ReadyToWork;
