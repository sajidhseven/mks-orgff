import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-overlay"></div>
        <img src="/Hero.jpg" alt="Terms of Use Hero" className="terms-hero-bg" />
        <div className="terms-hero-content">
          <h1 className="terms-hero-title fade-up">Terms of Use</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-container">
        <div className="terms-content-wrapper">
          <p className="terms-intro">
            Welcome to the official website of Melbourne Kannada Sangha (“the Sangha,” “we,” “our,” or “us”). By accessing or using our website, you agree to comply with the following Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website.
          </p>

          <div className="terms-sections">
            
            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">1</span>
                <h2>Acceptance of Terms</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>By using this website, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">2</span>
                <h2>Membership & Registration</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>To access certain features of the website, you may need to register as a member.</li>
                  <li>You agree to provide accurate, complete, and updated information during registration.</li>
                  <li>We reserve the right to suspend or terminate accounts if false information is provided.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">3</span>
                <h2>Use of the Website</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>This website is intended to promote Kannada language, culture, and community activities in Melbourne.</li>
                  <li>You agree to use the website for lawful purposes and in accordance with community values.</li>
                  <li>Any misuse of the website, including but not limited to harassment, hate speech, or spam, is strictly prohibited.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">4</span>
                <h2>Content & Copyright</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>All content, including text, images, and logos, is owned by Melbourne Kannada Sangha unless otherwise stated.</li>
                  <li>You may not copy, distribute, or reproduce content without prior written permission.</li>
                  <li>Members who contribute content (such as blog posts or event listings) grant the Sangha a non-exclusive, royalty-free license to use, display, and share their submissions.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">5</span>
                <h2>Events & Activities</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>The Sangha organizes various cultural, social, and community events.</li>
                  <li>Participation in events is voluntary, and the Sangha is not liable for any personal injury, loss, or damages occurring during events.</li>
                  <li>Event details, including fees and registrations, are subject to change.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">6</span>
                <h2>Third-Party Links</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>The website may contain links to third-party websites for convenience.</li>
                  <li>We are not responsible for the content or policies of external sites and do not endorse them.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">7</span>
                <h2>Privacy Policy</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>We value your privacy and handle personal information per our Privacy Policy.</li>
                  <li>We do not sell or share personal data with third parties without consent.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">8</span>
                <h2>Disclaimer & Limitation of Liability</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>The website is provided on an “as-is” basis. While we strive to keep information accurate, we do not guarantee its completeness or reliability.</li>
                  <li>Melbourne Kannada Sangha shall not be liable for any damages resulting from website use, service interruptions, or errors.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">9</span>
                <h2>Amendments & Termination</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>We reserve the right to update these Terms and Conditions at any time without prior notice.</li>
                  <li>Continued use of the website after modifications indicates acceptance of the updated terms.</li>
                  <li>We may suspend or terminate access to the website for any user violating these terms.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card">
              <div className="terms-card-header">
                <span className="terms-number">10</span>
                <h2>Governing Law</h2>
              </div>
              <div className="terms-card-body">
                <ul>
                  <li>These Terms and Conditions are governed by the laws of Victoria, Australia.</li>
                  <li>Any disputes arising shall be resolved under the jurisdiction of Melbourne courts.</li>
                </ul>
              </div>
            </div>

            <div className="terms-card contact-card">
              <div className="terms-card-header">
                <span className="terms-number">11</span>
                <h2>Contact Information</h2>
              </div>
              <div className="terms-card-body">
                <p>For any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                <address className="terms-address">
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

export default Terms;
