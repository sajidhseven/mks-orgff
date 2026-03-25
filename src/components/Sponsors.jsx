import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Sponsors.css';

const Sponsors = () => {

    const logos = [
        "https://mks.org.au/wp-content/uploads/2025/03/12.png",
        "https://mks.org.au/wp-content/uploads/2025/03/13.png",
        "https://mks.org.au/wp-content/uploads/2025/03/15.png",
        "https://mks.org.au/wp-content/uploads/2025/06/Loan-Gallery.png",

        "https://mks.org.au/wp-content/uploads/2025/11/5.png",
        "https://mks.org.au/wp-content/uploads/2025/11/6.png",
        "https://mks.org.au/wp-content/uploads/2025/11/7.png",
        "https://mks.org.au/wp-content/uploads/2025/11/8.png",
        "https://mks.org.au/wp-content/uploads/2025/11/9.png",
        "https://mks.org.au/wp-content/uploads/2025/11/10.png",
        "https://mks.org.au/wp-content/uploads/2025/11/11.png",
        "https://mks.org.au/wp-content/uploads/2025/11/12.png",
        "https://mks.org.au/wp-content/uploads/2025/11/13.png",
        "https://mks.org.au/wp-content/uploads/2025/11/14.png",
        "https://mks.org.au/wp-content/uploads/2025/11/15.png",
        "https://mks.org.au/wp-content/uploads/2025/11/16.png",
        "https://mks.org.au/wp-content/uploads/2025/11/17.png",
        "https://mks.org.au/wp-content/uploads/2025/11/18.png",
        "https://mks.org.au/wp-content/uploads/2025/11/19.png",
        "https://mks.org.au/wp-content/uploads/2025/11/20.png",
        "https://mks.org.au/wp-content/uploads/2025/11/21.png",
        "https://mks.org.au/wp-content/uploads/2025/11/22.png",
        "https://mks.org.au/wp-content/uploads/2025/11/23.png",
        "https://mks.org.au/wp-content/uploads/2025/11/24.png",
        "https://mks.org.au/wp-content/uploads/2025/11/25.png",
        "https://mks.org.au/wp-content/uploads/2025/11/26.png",
        "https://mks.org.au/wp-content/uploads/2025/11/27.png",
        "https://mks.org.au/wp-content/uploads/2025/11/28.png",
        "https://mks.org.au/wp-content/uploads/2025/11/29.png",
        "https://mks.org.au/wp-content/uploads/2025/11/30.png",
        "https://mks.org.au/wp-content/uploads/2025/11/31.png",
        "https://mks.org.au/wp-content/uploads/2025/11/32.png",
        "https://mks.org.au/wp-content/uploads/2025/11/33.png",
        "https://mks.org.au/wp-content/uploads/2025/11/34.png",
        "https://mks.org.au/wp-content/uploads/2025/11/35.png",
        "https://mks.org.au/wp-content/uploads/2025/11/36.png",
        "https://mks.org.au/wp-content/uploads/2025/11/37.png",
        "https://mks.org.au/wp-content/uploads/2025/11/38.png",
        "https://mks.org.au/wp-content/uploads/2025/11/39.png",
        "https://mks.org.au/wp-content/uploads/2025/11/40.png",
        "https://mks.org.au/wp-content/uploads/2025/11/41.png",
        "https://mks.org.au/wp-content/uploads/2025/11/42.png",
        "https://mks.org.au/wp-content/uploads/2025/11/43.png",
        "https://mks.org.au/wp-content/uploads/2025/11/44.png",
        "https://mks.org.au/wp-content/uploads/2025/11/45.png",
        "https://mks.org.au/wp-content/uploads/2025/11/46.png",
        "https://mks.org.au/wp-content/uploads/2025/11/47.png",
        "https://mks.org.au/wp-content/uploads/2025/11/48.png",
        "https://mks.org.au/wp-content/uploads/2025/11/49.png",
        "https://mks.org.au/wp-content/uploads/2025/11/50.png",
        "https://mks.org.au/wp-content/uploads/2025/11/51.png",
        "https://mks.org.au/wp-content/uploads/2025/11/52.png",
        "https://mks.org.au/wp-content/uploads/2025/11/53.png",
        "https://mks.org.au/wp-content/uploads/2025/11/54.png",
        "https://mks.org.au/wp-content/uploads/2025/11/55.png",
        "https://mks.org.au/wp-content/uploads/2025/11/56.png",
        "https://mks.org.au/wp-content/uploads/2025/11/57.png",
        "https://mks.org.au/wp-content/uploads/2025/11/58.png"
    ];

    const supportedLogos = [
        "https://mks.org.au/wp-content/uploads/2025/03/sup-1.png",
        "https://mks.org.au/wp-content/uploads/2025/03/sup-2.png",
        "https://mks.org.au/wp-content/uploads/2025/03/sup-3.png",
        "https://mks.org.au/wp-content/uploads/2025/03/sup-4.png",
        "https://mks.org.au/wp-content/uploads/2025/03/sup-5.png",
        "https://mks.org.au/wp-content/uploads/2025/03/sup-6.png",
        "https://mks.org.au/wp-content/uploads/2025/03/sup-7.png",
        "https://mks.org.au/wp-content/uploads/2025/03/sup-8.png"
    ];




    const sponsorVideos = [
        "https://mks.org.au/wp-content/uploads/2024/04/Kannada-Copy-of-India-Video-1.mp4",
        "https://mks.org.au/wp-content/uploads/2024/04/Total-Environment-1.mp4"
    ];


    return (
        <div className="sponsors-page">
            {/* Hero Section */}
            <section className="sponsors-hero">
                <div className="sponsors-hero-overlay"></div>
                <img src="/Comittee.jpg" alt="Sponsors Hero" className="sponsors-hero-bg" />
                <div className="sponsors-hero-content">
                    <h1 className="sponsors-hero-title fade-up">Sponsors</h1>
                </div>
            </section>

            {/* Promotional Videos Section */}
            <section className="sponsors-video-section sponsors-swiper-section no-title">
                <div className="sponsors-video-grid">
                    {sponsorVideos.map((video, index) => (
                        <div key={index} className="sponsor-video-card">
                            <video
                                src={video}
                                controls
                                playsInline
                                preload="metadata"
                                className="sponsor-video-player"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content Area */}
            <div className="sponsors-marquee-section">
                <section className="logo-marquee-wrapper sponsors-swiper-section">
                    {/* Title */}
                    <div className="supported-title-container">
                        <h2 className="supported-title">SPONSORS</h2>
                        <div className="supported-title-line"></div>
                    </div>

                    <div className="sponsors-swiper-container">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            centeredSlides={true}
                            loop={true}
                            speed={400}
                            autoplay={{ delay: 440, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            breakpoints={{
                                768: { slidesPerView: 3, spaceBetween: 0 }
                            }}
                        >
                            {logos.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-logo-card">
                                        <img src={logo} alt={`sponsor-logo-${index}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>



                {/* Supported By Section */}
                <section className="supported-section sponsors-swiper-section">
                    {/* Title */}
                    <div className="supported-title-container">
                        <h2 className="supported-title">SUPPORTED BY</h2>
                        <div className="supported-title-line"></div>
                    </div>

                    <div className="sponsors-swiper-container">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            centeredSlides={true}
                            loop={true}
                            speed={400}
                            autoplay={{ delay: 440, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            breakpoints={{
                                768: { slidesPerView: 3, spaceBetween: 0 }
                            }}
                        >
                            {supportedLogos.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-logo-card">
                                        <img src={logo} alt={`supported-logo-${index}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Sponsors;