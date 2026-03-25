import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mks-footer">

      {/* TOP SECTION */}
      <div className="mks-footer-top">

        {/* Decorative Gold Corners */}
        <div className="ornament ornament-left"></div>
        <div className="ornament ornament-right"></div>

        <div className="mks-footer-container">

          {/* ABOUT */}
          <div className="mks-footer-about">
            <div className="mks-footer-logo-title">
              <img src="/logo.png" alt="MKS Logo" />
              <h3>Melbourne Kannada Sangha</h3>
            </div>

            <p>
              Melbourne Kannada Sangha (MKS) was started on 10 April 1986 by a
              group of like-minded volunteers to conduct cultural programs by
              inviting overseas artists and festivals such as Karnataka
              Rajyotsava, Dasara and Ugadi.
            </p>

          </div>

          {/* CONTACT */}
          <div className="mks-footer-column">
            <h4>Contact Info</h4>
            <p><i className="fas fa-phone-alt"></i> +61401900080</p>
            <p><i className="fas fa-envelope"></i> melnudi@gmail.com</p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 1173 Heatherton Rd,<br />
              Noble Park, VIC 3174,<br />
              Australia
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="mks-footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/terms" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>› Terms of Use</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>› About</Link></li>
              <li><Link to="/disclaimer" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>› Disclaimer</Link></li>
              <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>› Privacy Policy</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>› Contact</Link></li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className="mks-footer-column">
            <div className="mks-follow" style={{ marginTop: 0 }}>
              <h4>Follow Us</h4>
              <div className="mks-socials">
                <a href="https://www.facebook.com/melbournekannadasangha/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/melnudi/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="mks-footer-bottom">
        <div className="bottom-ornament-left"></div>
        <div className="bottom-ornament-right"></div>

        <p>© 2024 Melbourne Kannada Sangha. All rights reserved.</p>

        <div className="mks-bottom-links">
          <Link to="/terms" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}><span>Terms of Use</span></Link>
          <Link to="/disclaimer" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}><span>Disclaimer</span></Link>
          <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}><span>Privacy Policy</span></Link>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}><span>Contact</span></Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;