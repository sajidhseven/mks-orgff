import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-overlay"></div>
        <img src="/Hero.jpg" alt="Privacy Policy Hero" className="privacy-hero-bg" />
        <div className="privacy-hero-content">
          <h1 className="privacy-hero-title fade-up">Privacy Policy</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="privacy-container">
        <div className="privacy-content-wrapper">
          <p className="privacy-intro">
            Melbourne Kannada Sangha (“the Sangha,” “we,” “our,” or “us”) is committed to protecting the privacy of our community members, website visitors, and event participants. This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>

          <div className="privacy-sections">
            
            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">1</span>
                <h2>Information We Collect</h2>
              </div>
              <div className="privacy-card-body">
                <p style={{marginBottom: "10px", color: "#555"}}>We may collect the following types of information:</p>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email address, phone number, postal address, and other details you provide during registration, event sign-ups, or communications.</li>
                  <li><strong>Non-Personal Information:</strong> Browser type, IP address, device information, and browsing activity collected through cookies and analytics tools.</li>
                  <li><strong>Event Participation Data:</strong> Photos, videos, or testimonials from events and activities organized by the Sangha.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">2</span>
                <h2>How We Use Your Information</h2>
              </div>
              <div className="privacy-card-body">
                <p style={{marginBottom: "10px", color: "#555"}}>We use the collected information to:</p>
                <ul>
                  <li>Facilitate membership registration and event participation.</li>
                  <li>Send updates, newsletters, and important community announcements.</li>
                  <li>Improve our website and services based on user engagement.</li>
                  <li>Maintain security and prevent fraudulent activities.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">3</span>
                <h2>Information Sharing & Disclosure</h2>
              </div>
              <div className="privacy-card-body">
                <ul>
                  <li>We do not sell, rent, or trade your personal information with third parties.</li>
                  <li>We may share information with trusted service providers who assist in operating our website and events, provided they comply with our privacy standards.</li>
                  <li>Information may be disclosed if required by law or to protect the rights and safety of our members.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">4</span>
                <h2>Data Security</h2>
              </div>
              <div className="privacy-card-body">
                <ul>
                  <li>We implement security measures to protect against unauthorized access, alteration, or disclosure of personal information.</li>
                  <li>However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">5</span>
                <h2>Cookies & Tracking Technologies</h2>
              </div>
              <div className="privacy-card-body">
                <ul>
                  <li>We use cookies and similar technologies to enhance user experience, analyze website traffic, and customize content.</li>
                  <li>You may adjust your browser settings to refuse cookies, but this may affect website functionality.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">6</span>
                <h2>External Links</h2>
              </div>
              <div className="privacy-card-body">
                <ul>
                  <li>Our website may contain links to third-party websites for additional resources.</li>
                  <li>We are not responsible for the privacy practices or content of external sites.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">7</span>
                <h2>Your Rights & Choices</h2>
              </div>
              <div className="privacy-card-body">
                <ul>
                  <li>You may request access, correction, or deletion of your personal data by contacting us.</li>
                  <li>You can opt out of newsletters or promotional emails by following the unsubscribe link.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">8</span>
                <h2>Children’s Privacy</h2>
              </div>
              <div className="privacy-card-body">
                <ul>
                  <li>Our website is not directed at children under 13 years of age, and we do not knowingly collect personal data from them.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card">
              <div className="privacy-card-header">
                <span className="privacy-number">9</span>
                <h2>Changes to this Privacy Policy</h2>
              </div>
              <div className="privacy-card-body">
                <ul>
                  <li>We may update this Privacy Policy from time to time.</li>
                  <li>Continued use of our website after changes constitutes acceptance of the updated policy.</li>
                </ul>
              </div>
            </div>

            <div className="privacy-card contact-card">
              <div className="privacy-card-header">
                <span className="privacy-number">10</span>
                <h2>Contact Information</h2>
              </div>
              <div className="privacy-card-body">
                <p>For any questions or requests related to this Privacy Policy, please contact us at:</p>
                <address className="privacy-address">
                  <strong>Melbourne Kannada Sangha</strong><br/>
                  <i className="fas fa-phone-alt"></i> +61401900080<br/>
                  <i className="fas fa-envelope"></i> melnudi@gmail.com<br/>
                  <i className="fas fa-map-marker-alt"></i> 1173 Heatherton Rd, Noble Park, VIC 3174, Australia<br/>
                </address>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
