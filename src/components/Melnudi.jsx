import React from 'react';
import './Melnudi.css';

const Melnudi = () => {
    return (
        <div className="melnudi-page">
            {/* Hero Section */}
            <section className="melnudi-hero">
                <div className="melnudi-hero-overlay"></div>
                {/* Fallback image style applied through CSS or passing an img tag */}
                <div className="melnudi-hero-bg"></div>
                <div className="melnudi-hero-content">
                    <h1 className="melnudi-hero-title">Welcome to Melnudi</h1>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="melnudi-container">

                {/* About Section */}
                <div className="melnudi-info-section">
                    <h2 className="melnudi-section-title">Melnudi</h2>
                    <div className="melnudi-section-line"></div>

                    <div className="melnudi-text-content">
                        <p>
                            <strong>Melnudi – the Kannada voice of Melbourne</strong> is the monthly newsletter circulated by the Melbourne Kannada Sangha to all its members. Melnudi is written by various members/non-members across Melbourne. Melnudi is composed of articles like short stories, episodes which are written across few months, nagehani (comedy corner) and the latest news/events in Melbourne. We also have the latest shows/kannada movies being screened in melbourne, and their details. Melnudi at the moment is being published by many volunteers of Kannada Sangha, who dedicates some time every month to compile all articles and publish them on time.
                        </p>
                        <p>
                            All articles published in Melnudi are a result of voluntary work done by kannada writers across Melbourne. As a kannadiga, if you are interested in writing some article of interest, we would be happy to publish it in our next edition of Melnudi.
                        </p>
                        <p className="melnudi-highlight-text">
                            So feel free to send in your articles/news/ideas to reach out to other kannadigas here.
                        </p>
                        <p>
                            Here are some Melnudi articles for the past few months. Please feel free to download the latest version of Melnudi and have a peep into what's happening in Melbourne Kannada Sangha.
                        </p>

                        <div className="melnudi-subscribe-box">
                            <span className="melnudi-subscribe-icon">📧</span>
                            <p>To subscribe to free Melnudi newsletter email with Subject : Newsletter to <a href="mailto:melnudi@gmail.com">melnudi@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                {/* PDF Overview Section */}
                <div className="melnudi-pdf-section">
                    <h3 className="melnudi-sub-title">Latest Edition Overview</h3>
                    <div className="melnudi-pdf-container">
                        <iframe
                            src="/download.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            title="Melnudi Latest Edition"
                            className="melnudi-pdf-viewer"
                        >
                            <p>Your browser does not support PDFs. <a href="/download.pdf">Download the PDF</a>.</p>
                        </iframe>
                    </div>

                    <div className="melnudi-download-wrapper">
                        <a href="/download.pdf" download="Melnudi-Latest-Edition.pdf" className="melnudi-btn-download">
                            <span>📥</span> Download PDF
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Melnudi;