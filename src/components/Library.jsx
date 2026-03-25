import React from 'react';
import './Library.css';

const Library = () => {
    return (
        <div className="library-page">
            {/* Hero Section */}
            <section className="library-hero">
                <div className="library-hero-overlay"></div>
                <img src="/Library-project.png" alt="Library Hero" className="library-hero-bg" />
                <div className="library-hero-content">
                    <h1 className="library-hero-title">Welcome to Library</h1>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="library-container">

                {/* Intro Section */}
                <div className="library-intro-section">
                    <h2 className="library-section-title">
                        ಮೆಲ್ಬೋರ್ನ್ ಕನ್ನಡ ಸಂಘ ಗ್ರಂಥಾಲಯ<br />
                        <span>Melbourne Kannada Sangha Library</span>
                    </h2>
                    <div className="library-section-line"></div>

                    <div className="library-text-content">
                        <p>
                            Melbourne Kannada Sangha has been running since 2004, initially as a mobile library and now has a permanent location at Fregon Hall, Clayton.
                        </p>
                        <p>
                            Kannada Sangha Library provides a platform for all kannadigas in Melbourne to reach out for the latest magazines and all novels from famous writers. We have a huge collection of kannada magazines, some for monthly and some for weekly rentals. Our weeklies include magazines like – Sudha, Taranga, Karmaveera, Hi Bangalore, Lankesh Patrike, Mangala. Our monthly rentals include Kasturi, Mayura, Tushar, Griha Shobha, Roopataara, Priyanka, O Manase and so on.
                        </p>
                        <p>
                            We also have a very good collection of novels from renowned authors like Ta Ra Su, S L Bairappa, Triveni, Saayisute, M K Indira, Anupama Niranjana, Sudha Murthy and many more. We cater for people’s requirements from all backgrounds and for all age groups. We also have books for kids on moral stories and poems.
                        </p>
                        <p className="library-highlight-text">
                            Come with family to enrich the culture, heritage of our language and appreciate the vastness of Kannada.
                        </p>
                    </div>
                </div>

                {/* Timings and Rules Section */}
                <div className="library-timings-section">
                    <h2 className="library-section-title">Kannada Library Timings</h2>
                    <div className="library-section-line"></div>

                    <div className="library-info-grid">
                        <div className="library-info-card">
                            <div className="library-card-icon">🕒</div>
                            <h3>Timings</h3>
                            <p>1st and 3rd Sunday of every month</p>
                            <p><strong>2.00 pm to 4.00 pm</strong></p>
                        </div>

                        <div className="library-info-card">
                            <div className="library-card-icon">📍</div>
                            <h3>Location</h3>
                            <p>1173-1175 Heatherton Road,</p>
                            <p>Noble Park, Vic 3174</p>
                        </div>

                        <div className="library-info-card">
                            <div className="library-card-icon">📞</div>
                            <h3>Contact</h3>
                            <p>Librarian Mr. Sateesh Savnoor</p>
                            <p><strong>0403 110 556</strong> (during library hours)</p>
                            <p>Email: <a href="mailto:sateeshsavanur@hotmail.com">sateeshsavanur@hotmail.com</a></p>
                        </div>
                    </div>

                    <div className="library-rules-container">
                        <h3>Please note:</h3>
                        <ul className="library-rules-list">
                            <li>Melbourne Kannada Sangha membership is a prerequisite to borrow.</li>
                            <li>A deposit (refundable) of <strong>$5.00</strong> will be collected.</li>
                            <li><strong>Borrowing periods:</strong> 2 months for books, 1 month for magazines.</li>
                            <li>A small book loan fee applies, varying from <strong>$0.25 to $1.00</strong>.</li>
                            <li>For more information regarding the collection of books, please contact our volunteer librarian.</li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Library;