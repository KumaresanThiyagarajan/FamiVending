import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const phoneNumber = "916383497994";
    const message = "Hello, I'm interested in partnering with your vending machine business. Please share the details regarding partnership opportunities";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

      {/* Contact Form */}
      <div className="contact-form-section">
        <div className="container">
          <h3 className="form-heading">GET DIRECTION</h3>
          <form className="contact-form" onSubmit={handleWhatsAppRedirect}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message (optional)</label>
              <textarea id="message" name="message" rows="5" placeholder=""></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
