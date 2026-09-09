import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="Fami Vending" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">
            Best Future Tech Vending Machine<br />For Your Business.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">About Company</a></li>
            <li><a href="#">Featured Products</a></li>
            <li><a href="#">Our Blogs</a></li>
            <li><a href="#">Contact Info</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li>
              <span className="footer-icon">📍</span>
              <span>#7/8, Babuji Nagar 2nd Street, 2nd Floor, Angeripalayam Main Rd, Kumaranandhanpuram, Tirupur, Tamil Nadu 641602</span>
            </li>
            <li>
              <span className="footer-icon">✉</span>
              <a href="mailto:info@famivending.com">info@famivending.com</a>
            </li>
            <li>
              <span className="footer-icon">📞</span>
              <a href="tel:+916383497994">(+91) 63834 97994</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow us on</h4>
          <div className="footer-socials">
            {/* 1. Instagram */}
            <a
              href="https://www.instagram.com/fami_vending?igsi=NHR0aGd3MG85eWUx"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* 2. Facebook */}
            <a
              href="https://www.facebook.com/share/1HphbJpLS4/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* 3. WhatsApp */}
            <a
              href="https://wa.me/916383497994"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* 4. YouTube */}
            <a
              href="https://youtube.com/@famivending?si=PMHPjW1ju5pJTjGY"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
              aria-label="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.58,7.19A2.71,2.71,0,0,0,19.67,5.3C17.94,4.86,12,4.86,12,4.86s-5.94,0-7.67.44A2.68,2.68,0,0,0,2.42,7.19,29,29,0,0,0,2,12a29,29,0,0,0,.42,4.81,2.71,2.71,0,0,0,1.91,1.89c1.73.44,7.67.44,7.67.44s5.94,0,7.67-.44a2.71,2.71,0,0,0,1.91-1.89A29,29,0,0,0,22,12a29,29,0,0,0-.42-4.81ZM10,15V9l5.2,3Z" />
              </svg>
            </a>

            {/* 5. Threads */}
            <a
              href="https://www.threads.net/@fami_vending"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon threads"
              aria-label="Threads"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Copyright Fami Vending. All Rights Reserved. Designed by Kumaresan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
