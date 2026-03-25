import React from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="disclaimer-page">
      {/* Hero Section */}
      <section className="disclaimer-hero">
        <div className="disclaimer-hero-overlay"></div>
        <img src="/Hero.jpg" alt="Disclaimer Hero" className="disclaimer-hero-bg" />
        <div className="disclaimer-hero-content">
          <h1 className="disclaimer-hero-title fade-up">Disclaimer</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="disclaimer-container">
        <div className="disclaimer-content-wrapper">
          <p className="disclaimer-intro">
            Welcome to the official website of Melbourne Kannada Sangha (“the Sangha,” “we,” “our,” or “us”). 
            By accessing and using this website, you acknowledge and agree to the terms outlined in this Disclaimer.
          </p>

          <div className="disclaimer-sections">
            
            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">1</span>
                <h2>General Information</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>The information provided on this website is for general informational and community engagement purposes only.</li>
                  <li>While we strive to ensure accuracy, we do not guarantee that all information is current, complete, or free from errors.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">2</span>
                <h2>No Professional Advice</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>The content on this website does not constitute professional advice (including but not limited to legal, financial, medical, or any other professional service).</li>
                  <li>You should seek appropriate professional consultation before making any decisions based on the information provided.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">3</span>
                <h2>External Links</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>This website may contain links to third-party websites for additional resources or references.</li>
                  <li>We do not control, endorse, or take responsibility for the content, policies, or reliability of any third-party websites.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">4</span>
                <h2>User-Generated Content</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>The website may include content submitted by members or users, such as forum posts, blogs, or event listings.</li>
                  <li>The views and opinions expressed in user-generated content do not necessarily reflect those of Melbourne Kannada Sangha.</li>
                  <li>We reserve the right to moderate or remove content that violates our community guidelines.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">5</span>
                <h2>Event Participation</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>Melbourne Kannada Sangha organizes events and activities for the community.</li>
                  <li>Participation in events is voluntary, and attendees assume full responsibility for any risks, injuries, or damages.</li>
                  <li>The Sangha is not liable for any loss, injury, or damages incurred during events.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">6</span>
                <h2>No Warranties</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>The website and its content are provided on an “as-is” basis, without warranties of any kind, either express or implied.</li>
                  <li>We do not guarantee uninterrupted or error-free access to the website.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">7</span>
                <h2>Limitation of Liability</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>Melbourne Kannada Sangha is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website.</li>
                  <li>This includes but is not limited to loss of data, financial loss, or damage to devices due to website access.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">8</span>
                <h2>Changes to Disclaimer</h2>
              </div>
              <div className="disclaimer-card-body">
                <ul>
                  <li>We reserve the right to update or modify this Disclaimer at any time without prior notice.</li>
                  <li>Continued use of the website after updates constitutes acceptance of the revised terms.</li>
                </ul>
              </div>
            </div>

            <div className="disclaimer-card contact-card">
              <div className="disclaimer-card-header">
                <span className="disclaimer-number">9</span>
                <h2>Contact Information</h2>
              </div>
              <div className="disclaimer-card-body">
                <p>For any questions or concerns regarding this Disclaimer, please contact us at:</p>
                <address className="disclaimer-address">
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

export default Disclaimer;
