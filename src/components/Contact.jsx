import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>
                {/* The hero image background will be styled in CSS. User provided an image, 
            but usually we just use a generic class. I'll use inline style or css class */}
                <div className="contact-hero-bg"></div>
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">Contact Us</h1>
                </div>
            </section>

            {/* Main Content Sections with defined gradient background */}
            <div className="contact-main-wrapper">
                <div className="contact-container">

                    <div className="contact-grid">
                        {/* Section 1: Contact Information */}
                        <div className="contact-info-section">
                            <h2 className="contact-section-title">Get In Touch</h2>
                            <div className="contact-section-line"></div>

                            <div className="contact-details-box">
                                <div className="contact-detail-item">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-text">
                                        <h3>Address</h3>
                                        <p>Melbourne Kannada Sangha</p>
                                        <p>1173 Heatherton Rd, Noble Park, VIC 3174, Australia</p>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="contact-icon">📱</div>
                                    <div className="contact-text">
                                        <h3>Phone</h3>
                                        <p>WhatsApp: 0452 036</p>
                                        <p>Srinivas Sharma — +61 401 900 080</p>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="contact-icon">✉️</div>
                                    <div className="contact-text">
                                        <h3>Email</h3>
                                        <p><a href="mailto:melnudi@gmail.com">melnudi@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Contact Form */}
                        <div className="contact-form-section">
                            <h2 className="contact-section-title">Send a Message</h2>
                            <div className="contact-section-line"></div>

                            <div className="contact-form-card">
                                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" placeholder="Your Name" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="Your Email Address" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" id="phone" placeholder="Your Phone Number" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                                    </div>

                                    <button type="submit" className="contact-submit-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;