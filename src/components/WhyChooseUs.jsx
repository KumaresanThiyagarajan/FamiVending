import React from 'react';
import './WhyChooseUs.css';

const spheres = [
  { id: 1, name: 'PayPal', size: 'large', top: '25%', left: '30%', delay: '0s', classOverride: 'logo-paypal' },
  { id: 2, name: '', size: 'mini-blue', top: '35%', left: '48%', delay: '0.5s' },
  { id: 3, name: 'VISA', size: 'medium', top: '48%', left: '55%', delay: '1s', classOverride: 'logo-visa' },
  { id: 4, name: 'Payoneer', size: 'small', top: '45%', left: '78%', delay: '1.5s', classOverride: 'logo-payoneer' },
  { id: 5, name: 'stripe', size: 'large', top: '65%', left: '20%', delay: '0.2s', classOverride: 'logo-stripe' },
  { id: 6, name: 'AMERICAN\nEXPRESS', size: 'medium', top: '62%', left: '42%', delay: '1.2s', classOverride: 'logo-amex' },
  { id: 7, name: 'mastercard', size: 'large', top: '65%', left: '68%', delay: '0.8s', classOverride: 'logo-mastercard' },
  { id: 8, name: '', size: 'mini-purple', top: '75%', left: '50%', delay: '0.4s' },
  { id: 9, name: '', size: 'mini-lightblue', top: '80%', left: '32%', delay: '1.1s' },
  { id: 10, name: '', size: 'mini-darkblue', top: '68%', left: '3%', delay: '0.7s' },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        
        {/* Left Side: Graphic */}
        <div className="why-graphic">
          <div className="concentric-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>
          
          <div className="spheres-container">
            {spheres.map((sphere) => (
              <div 
                key={sphere.id} 
                className={`sphere-wrapper ${sphere.size}`}
                style={{ 
                  top: sphere.top, 
                  left: sphere.left, 
                  animationDelay: sphere.delay 
                }}
              >
                {sphere.name ? (
                  <div className="sphere has-logo">
                    {/* The user will replace this text with their actual img logo */}
                    <span className={`logo-placeholder ${sphere.classOverride || ''}`}>
                      {sphere.name.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i !== sphere.name.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ) : (
                  <div className={`sphere ${sphere.size}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="why-content">
          <span className="section-label">WHY CHOOSE US</span>
          
          <div className="why-grid">
            <div className="why-item">
              <h2 className="why-title gradient-text">Our Mission</h2>
              <p>
                Our company aims to introduce an innovative idea to people we have to
                pursue our innovation through squad analysis, statistical analysis, and
                implementation of various marketing strategies. Our mission is to the new
                technology to society, with excellent vendor items by providing traditional
                foods that are supper in quality and enjoyable in taste.
              </p>
            </div>

            <div className="why-item">
              <h2 className="why-title gradient-text">Our Vision</h2>
              <p>
                Our vision is to serve people from the heart and delivery products with high
                quality and hygiene. We are more than happy to help determine and satisfy
                your need for products. We strive to change and enhance the consumer vending
                experience by promoting wellness, using advanced technology.
              </p>
            </div>

            <div className="why-item">
              <h2 className="why-title gradient-text">Our Values</h2>
              <p>
                Our value is service to people, believe in putting our customer and community
                members first. We know for heart service is good for our team to deliver
                exceptional value to each and every customer. Our vending is empower
                organization and individual to reach their full potential and ultimately
                improve the great joy of our team work.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
