import React, { useState } from 'react';
import './AboutKannadaBhavana.css';
import './DonateUs.css';

const images = [
  "https://mks.org.au/wp-content/uploads/2023/07/kb1.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb2-tape-cut.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-arathi.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-board-claps.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-board.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-ganesha.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-backyard.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-back.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-kannada-prabha.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-trophy.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-girls2.jpeg",
  "https://mks.org.au/wp-content/uploads/2023/07/joshi-speech.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-meeting-room.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-meeting-2.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-library.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-libray-3.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-library-2.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-chandraspeech.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-minister-trophy.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-minister.jpg",
  "https://mks.org.au/wp-content/uploads/2023/07/kb-trophy-cassandra.jpg"
];

const AboutKannadaBhavana = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about-kannada-bhavana-page">
      {/* Hero Section */}
      <section className="akb-hero">
        <div className="akb-hero-overlay"></div>
        <img src="/Hero.jpg" alt="About Kannada Bhavana Hero" className="akb-hero-bg" />
        <div className="akb-hero-content">
          <h1 className="akb-hero-title">About Kannada Bhavana</h1>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="akb-container">

        {/* Intro Section */}
        <div className="akb-intro-section">
          <h2 className="akb-section-title">About Kannada Bhavana</h2>
          <div className="akb-section-line"></div>
          <div className="akb-text-content">
            <p>
              Kannada Bhavana is a cultural hub located at <strong>1173 Heatherton Rd, Noble Park VIC 3174</strong>, dedicated to fostering the rich heritage and traditions of the Kannada-speaking community. It serves as a vibrant center for cultural exchange, learning, and community growth.
            </p>
            <p>
              The Bhavana recently celebrated its inauguration ceremony on <strong>July 8, 2023</strong>, which was graced by esteemed guests whose presence added immense credibility and inspiration to the event.
            </p>
            <p>
              As the Bhavana embarks on its journey, it aims to expand its facilities to accommodate a larger audience and cater to a diverse range of cultural programs.
              Plans include the establishment of educational initiatives for children and temporary accommodation for newly arrived immigrants.
            </p>
            <p>
              The support and guidance of the community are crucial in achieving these goals, and Kannada Bhavana eagerly looks forward to continued collaboration to create a welcoming and inclusive space for all.
            </p>
          </div>
        </div>

        {/* Dream Banner Section */}
        {/* <div className="akb-dream-banner">
          <img src="/Kannada-Bhavana-1.png" alt="Kannada Bhavana Dream" className="akb-dream-banner-bg" />
          <div className="akb-dream-banner-overlay"></div>
          <div className="akb-dream-banner-content">
            <h2>Project Starts on 10 January 2018</h2>
            <h1>Realise our dream of Kannada Bhavana</h1>
          </div>
        </div> */}

        {/* Projects Section */}
        <div className="akb-projects-section">
          <h2 className="akb-section-title">Kannada Bhavana Background</h2>
          <div className="akb-section-line"></div>

          <div className="akb-project-intro">
            <p>
              Since its inception of non-profit organisation, MKS is dreaming to establish Kannada Bhavana to uplift its presence and create Kannada Icon in Australia. Our goal to provide a unique business model involving local patrons, life members of MKS to build and manage Kannada Bhavana by raising local and overseas shares.
            </p>
            <p>
              Melbourne has experienced steady population growth in the 15 years to 2016. The stable growth rate is expected to continue in the next 15 years, with Indian population forecasted to increase to 300,000 by 2031. Hence it is right time that MKS dream can be realised in coming years.
            </p>
          </div>

          <div className="akb-grid-container">
            {/* Objectives Card */}
            <div className="akb-card">
              <div className="akb-card-header">
                <h3>Objectives</h3>
              </div>
              <ul className="akb-list">
                <li>Invest in quality well cared for property that are priced within the local market range</li>
                <li>Excellent location access to public transport and shopping areas</li>
                <li>Venue for wedding, sporting, school, corporate and birthday/Anniversary parties.</li>
                <li>Generate growth and passive income.</li>
                <li>Potential capital gain &amp; equity.</li>
                <li>Cash Flow and loan pay down</li>
                <li>Tax benefits.</li>
              </ul>
            </div>

            {/* Benefits to Shareholders Card */}
            <div className="akb-card">
              <div className="akb-card-header">
                <h3>Benefits to Shareholders</h3>
              </div>
              <ul className="akb-list">
                <li>Safe and Secured</li>
                <li>Easy to get started</li>
                <li>Easier to research than stocks and shares</li>
                <li>Relatively easy to get finance</li>
                <li>Tax breaks – negative gearing</li>
                <li>Keep growing – even retired</li>
                <li>Australian economy is strong</li>
                <li>Pass onto your kids</li>
                <li>More stable investment</li>
                <li>Demand is outstripping supply</li>
                <li>Make use for wedding/anniversary/birthday parties at discounted price</li>
                <li>Sell of share to other MKS members</li>
              </ul>
            </div>
          </div>

          {/* Project Details */}
          {/* <div className="akb-project-details">
            <h3>PROJECT DETAILS</h3>
            <div className="akb-details-badges">
              <span className="akb-badge">
                <span className="akb-badge-icon">📅</span>
                <strong>Starts:</strong> 10 January 2018
              </span>
              <span className="akb-badge">
                <span className="akb-badge-icon">💰</span>
                <strong>Budget:</strong> $2,000,000
              </span>
              <span className="akb-badge">
                <span className="akb-badge-icon">📍</span>
                <strong>Location:</strong> Melbourne, Kannada
              </span>
            </div>
          </div> */}

        </div>

        {/* Gallery Section */}
        <div className="akb-gallery-section" style={{ marginTop: '4rem' }}>
          <h2 className="akb-section-title">Kannada Bhavana Inauguration</h2>
          <div className="akb-section-line"></div>
          
          <div className="akb-gallery-grid">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="akb-gallery-item"
                onClick={() => {
                   setPhotoIndex(index);
                   setIsOpen(true);
                }}
              >
                <img src={img} alt={`Kannada Bhavana Gallery ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </section>

      {isOpen && (
        <div className="akb-custom-modal" onClick={() => setIsOpen(false)}>
          <span className="akb-modal-close" onClick={() => setIsOpen(false)}>&times;</span>
          <img src={images[photoIndex]} alt="Enlarged View" className="akb-modal-img" onClick={(e) => e.stopPropagation()} />
          <div className="akb-modal-nav akb-modal-prev" onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex((photoIndex + images.length - 1) % images.length);
          }}>&#10094;</div>
          <div className="akb-modal-nav akb-modal-next" onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex((photoIndex + 1) % images.length);
          }}>&#10095;</div>
        </div>
      )}

       <div className="donate-us-page">
            {/* Hero Section */}
            {/* <section className="donate-hero">
                <div className="donate-hero-overlay"></div>
                <img src="/Hero.jpg" alt="Donate Us Hero" className="donate-hero-bg" />
                <div className="donate-hero-content">
                    <h1 className="donate-hero-title fade-up">Donate Us</h1>
                </div>
            </section> */}

            {/* COVID Appeal Section */}
            {/* <section className="covid-appeal-section">
                <div className="appeal-container">
                    <div className="appeal-image-wrapper">
                        <img
                            src="https://mks.org.au/wp-content/uploads/2021/04/COVID-19-APPEAL-1.jpeg"
                            alt="Covid 19 Appeal"
                            className="appeal-image"
                        />
                    </div>
                    <div className="appeal-text-wrapper">
                        <p className="appeal-greeting">Dear All,</p>
                        <p>
                            A second wave of the coronavirus pandemic is sweeping across India, with a devastating impact on people’s lives.
                        </p>
                        <p>
                            If we can’t flatten the curve and stop this second wave. Daily infection rates are soaring. Hospitals are overwhelmed & shortage out of oxygen.
                        </p>
                        <p>
                            Intensive care units are full. People are being turned away from emergency rooms because they just don’t have the supplies.
                        </p>
                        <p className="appeal-highlight">
                            With India’s healthcare system under such enormous strain, your urgent support is needed.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Donation Details Section */}
            <section className="donation-details-section">
                <div className="container">
                    <h2 className="donation-title">Make a life-changing donation to Save Lives in India!</h2>
                    <div className="donation-divider"></div>

                    <div className="donation-cards-wrapper">
                        {/* MKS Card */}
                        <div className="donation-card">
                            <h3>MELBOURNE KANNADA SANGHA</h3>
                            <p><strong>Account Name:</strong> MELBOURNE KANNADA SANGHA</p>
                            <p><strong>BSB:</strong> 063882</p>
                            <p><strong>ACC NO:</strong> 10148074</p>
                            <div className="reference-box">
                                <p><strong>Please Quote Reference:</strong><br />FULL NAME / COVID INDIA</p>
                            </div>
                        </div>

                        {/* 
                        <div className="donation-or">
                            <span>(OR)</span>
                        </div>

                        <div className="donation-card iahv-card">
                            <h3>IAHV – INTERNATIONAL ASSOCIATION FOR HUMAN VALUES</h3>
                            <p className="tax-text">All donations over $2 are tax-deductible.</p>
                            <p>If you have any questions or concerns, please get in touch via <a href="mailto:donations@iahv.org.au">donations@iahv.org.au</a></p>

                            <a href="https://www.iahv.org.au/" target="_blank" rel="noopener noreferrer" className="donate-btn">CLICK HERE TO DONATE TO IAHV</a>
                        </div>
                        */}

                    </div>

                    <div className="donation-footer">
                        <p>On behalf of everyone at Melbourne Kannada Sangha, we acknowledge the far-reaching impact of this pandemic.</p>
                    </div>
                </div>
            </section>

        </div>





    </div>
  );
};

export default AboutKannadaBhavana;