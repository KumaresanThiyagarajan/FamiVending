import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Banner */}
      <div className="contact-banner">
        <div className="container">
          <span className="contact-label">CONTACT US</span>
          <h2 className="contact-title">
            <strong>Request Free</strong> Consultancy
          </h2>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <span className="info-label">Hotline 24/7</span>
              <a href="tel:+916383497994" className="info-value highlight">(+91) 63834 97994</a>
            </div>
            <div className="contact-info-item full-width">
              <span className="info-label">Address :</span>
              <span className="info-value">#7/8, Babuji Nagar 2nd Street, 2nd Floor, Angeripalayam Main Rd, Kumaranadhanpuram, Tirupur, Tamil Nadu 641602</span>
            </div>
            <div className="contact-info-item">
              <span className="info-label">Email :</span>
              <a href="mailto:info@famivending.com" className="info-value">info@famivending.com</a>
            </div>
            <div className="contact-info-item">
              <span className="info-label">Work Hours :</span>
              <span className="info-value">Mon - Sat: 09:00AM - 08:00PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
