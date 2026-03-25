import React from 'react';
import './BookReadingClub.css';

const BookReadingClub = () => {
    return (
        <div className="brc-page">
            {/* Hero Section */}
            <section className="brc-hero">
                <div className="brc-hero-overlay"></div>
                {/* Assuming there's a specific hero image you might want to use later. 
                    Using a placeholder class for the background for now, or if an image was provided,
                    we'd set it here. Using a generic hero class to match aesthetics. */}
                <div className="brc-hero-bg"></div>
                <div className="brc-hero-content">
                    <h1 className="brc-hero-title">Welcome to the Book Reading Club</h1>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="brc-container">

                {/* Info Section */}
                <div className="brc-info-section">
                    <h2 className="brc-section-title">Book Reading Club</h2>
                    <div className="brc-section-line"></div>

                    <div className="brc-text-content">
                        <p className="brc-intro-text">
                            Upcoming kannada book club meeting information and invitation to join the book club
                        </p>

                        <p><strong>ಮಾನ್ಯ ಸದಸ್ಯರೆ,</strong></p>
                        <p>
                            ಮೆಲ್ಬರ್ನ್ ಕನ್ನಡ ಸಂಘ ಮತ್ತು ಗ್ರಂಥಾಲಯದ ಆಶ್ರಯದಲ್ಲಿ, ಕೆಲವು ಸಾಹಿತ್ಯ ಪ್ರೇಮಿಗಳು ಒಟ್ಟಾಗಿ, ಕನ್ನಡ ಪುಸ್ತಕಗಳ ಓದುಗರ ಕೂಟವನ್ನು ಆರಂಭಿಸಿದ್ದೇವೆ. ಆಯ್ದ ಕನ್ನಡ ಪುಸ್ತಕಗಳನ್ನು ಓದುವುದರ ಜೊತೆಗೆ, ಅದರ ಬಗೆಗಿನ ಸ್ವಂತ ಗ್ರಹಿಕೆ, ಆಲೋಚನೆ ಮತ್ತು ಅಭಿಪ್ರಾಯಗಳನ್ನು ಪರಸ್ಪರ ಹಂಚಿಕೊಳ್ಳಲು ಒಂದು ಮುಕ್ತ ಸ್ನೇಹಪರ ಹಾಗೂ ಸಭ್ಯ ವೇದಿಕೆ ಒದಗಿಸುವುದು ಈ ಅನೌಪಚಾರಿಕ "ಸಾಹಿತ್ಯ ಕೂಟ"ದ ಉದ್ದೇಶ.
                        </p>
                        <p>
                            ಮೆಲ್ಬರ್ನಿನ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪ್ರೇಮಿಗಳ ಬೆಂಬಲದಿಂದ ೯ನೇ ವರ್ಷದಲ್ಲಿ ಮುಂದುವರೆಯುತ್ತಿರುವ ಪುಸ್ತಕ ಕೂಟದ ಮುಂಬರುವ ಸಭೆಯ ವಿವರಗಳನ್ನು ಕೆಳಗೆ ನೀಡಲಾಗಿದೆ.
                        </p>

                        <div className="brc-meeting-details">
                            <h3>Meeting Details</h3>
                            <div className="brc-detail-item">
                                <span className="brc-icon">📖</span>
                                <span><strong>‘ಹಂಸಗೀತೆ’:</strong> ಸಾಹಿತಿ; ತ ರಾ ಸು</span>
                            </div>
                            <div className="brc-detail-item">
                                <span className="brc-icon">📅</span>
                                <span><strong>ದಿನಾಂಕ:</strong> ರವಿವಾರ, ಮಾರ್ಚ್ ೦೧, ೨೦೨೦ / Sunday, 1st March, 2020</span>
                            </div>
                            <div className="brc-detail-item">
                                <span className="brc-icon">⏰</span>
                                <span><strong>ಸಮಯ:</strong> ಮಧ್ಯಾಹ್ನ ೪ / 4 pm</span>
                            </div>
                            <div className="brc-detail-item">
                                <span className="brc-icon">📍</span>
                                <span><strong>ಸ್ಥಳ:</strong> Fregon hall, Fregon road, Clayton</span>
                            </div>
                        </div>

                        <p className="brc-contact-info-text">
                            ಓದುಗರ ಕೂಟದಲ್ಲಿ ಆಸಕ್ತಿಯುಳ್ಳವರು ಗ್ರಂಥ ಪಾಲಕ <strong>ಶ್ರೀ. ಸತೀಶ ಸವಣೂರ</strong> ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ.
                            ಪುಸ್ತಕ ಕೂಟದ ನಿಯಮಿತ ಸದಸ್ಯರಾಗಿಲ್ಲದೆಯೂ ತಾವು ಪ್ರಾಸಂಗಿಕ ಸದಸ್ಯರಾಗಿ ತಮಗೆ ಬೇಕೆನಿಸಿದ ಸಭೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು.
                        </p>

                        <div className="brc-contact-cards">
                            <div className="brc-contact-card">
                                📞 <strong>ದೂರವಾಣಿ:</strong> <a href="tel:0481365020">೦೪೮೧ ೩೬೫ ೦೨೦ / 0481 365 020</a>
                            </div>
                            <div className="brc-contact-card">
                                ✉️ <strong>e-mail:</strong> <a href="mailto:kannadasanghalibrary@gmail.com">kannadasanghalibrary@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default BookReadingClub;