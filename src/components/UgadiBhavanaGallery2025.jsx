import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './UgadiBhavanaGallery2025.css';

const images = [
    { id: 1, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0798.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0798-400x284.jpg', title: 'IMG_0798' },
    { id: 2, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0804.png', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0804-400x284.png', title: 'IMG_0804' },
    { id: 3, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0819.png', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0819-400x284.png', title: 'IMG_0819' },
    { id: 4, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0870.png', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0870-400x284.png', title: 'IMG_0870' },
    { id: 5, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0874.png', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0874-400x284.png', title: 'IMG_0874' },
    { id: 6, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0887.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0887-400x284.jpg', title: 'IMG_0887' },
    { id: 7, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0902.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0902-400x284.jpg', title: 'IMG_0902' },
    { id: 8, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0906.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0906-400x284.jpg', title: 'IMG_0906' },
    { id: 9, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0909.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0909-400x284.jpg', title: 'IMG_0909' },
    { id: 10, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0915.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0915-400x284.jpg', title: 'IMG_0915' },
    { id: 11, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0917.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0917-400x284.jpg', title: 'IMG_0917' },
    { id: 12, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0921.png', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0921-400x284.png', title: 'IMG_0921' },
    { id: 13, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0922.png', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0922-400x284.png', title: 'IMG_0922' },
    { id: 14, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0959.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0959-400x284.jpg', title: 'IMG_0959' },
    { id: 15, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0969.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0969-400x284.jpg', title: 'IMG_0969' },
    { id: 16, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0975.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0975-400x284.jpg', title: 'IMG_0975' },
    { id: 17, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0990.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0990-400x284.jpg', title: 'IMG_0990' },
    { id: 18, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1003.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1003-400x284.jpg', title: 'IMG_1003' },
    { id: 19, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1006.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1006-400x284.jpg', title: 'IMG_1006' },
    { id: 20, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1010.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1010-400x284.jpg', title: 'IMG_1010' },
    { id: 21, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1019.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1019-400x284.jpg', title: 'IMG_1019' },
    { id: 22, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1022.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1022-400x284.jpg', title: 'IMG_1022' },
    { id: 23, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1038.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1038-400x284.jpg', title: 'IMG_1038' },
    { id: 24, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1051.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1051-400x284.jpg', title: 'IMG_1051' },
    { id: 25, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1062.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1062-400x284.jpg', title: 'IMG_1062' },
    { id: 26, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1066.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1066-400x284.jpg', title: 'IMG_1066' },
    { id: 27, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1083.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1083-400x284.jpg', title: 'IMG_1083' },
    { id: 28, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1078.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1078-400x284.jpg', title: 'IMG_1078' },
    { id: 29, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1076.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1076-400x284.jpg', title: 'IMG_1076' },
    { id: 30, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0668.png', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0668-400x284.png', title: 'IMG_0668' },
    { id: 31, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0622.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0622-400x284.jpg', title: 'IMG_0622' },
    { id: 32, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0623.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0623-400x284.jpg', title: 'IMG_0623' },
    { id: 33, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0626.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0626-400x284.jpg', title: 'IMG_0626' },
    { id: 34, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0633.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0633-400x284.jpg', title: 'IMG_0633' },
    { id: 35, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0639.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0639-400x284.jpg', title: 'IMG_0639' },
    { id: 36, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0642.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0642-400x284.jpg', title: 'IMG_0642' },
    { id: 37, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0659.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0659-400x284.jpg', title: 'IMG_0659' },
    { id: 38, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0671.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0671-400x284.jpg', title: 'IMG_0671' },
    { id: 39, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0675-400x284.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0675-400x284.jpg', title: 'IMG_0675' },
    { id: 40, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0688.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0688-400x284.jpg', title: 'IMG_0688' },
    { id: 41, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0703.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0703-400x284.jpg', title: 'IMG_0703' },
    { id: 42, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0721.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0721-400x284.jpg', title: 'IMG_0721' },
    { id: 43, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0735.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0735-400x284.jpg', title: 'IMG_0735' },
    { id: 44, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0741.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0741-400x284.jpg', title: 'IMG_0741' },
    { id: 45, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0773.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0773-400x284.jpg', title: 'IMG_0773' },
    { id: 46, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0776.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_0776-400x284.jpg', title: 'IMG_0776' },
];

const UgadiBhavanaGallery2025 = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const showPrev = (e) => {
        e.stopPropagation();
        setLightboxIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const showNext = (e) => {
        e.stopPropagation();
        setLightboxIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bhavana-gallery-wrapper">
            {/* Hero Section */}
            <section className="bhavana-gallery-hero">
                <div className="bhavana-hero-overlay"></div>
                <div className="bhavana-hero-content">
                    <h1 className="fade-up">Ugadi Event Kannada Bhavana Gallery – 2025</h1>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="bhavana-gallery-grid-section">
                <div className="bhavana-gallery-container">
                    <div className="bhavana-gallery-header">
                        <h2 className="bhavana-grid-title">MKS UGADI EVENT – KANNADA BHAVANA 2025</h2>
                    </div>
                    <div className="bhavana-gallery-grid">
                        {images.map((img, index) => (
                            <div key={img.id} className="bhavana-gallery-item" onClick={() => openLightbox(index)}>
                                <div className="bhavana-gallery-img-wrapper">
                                    <img src={img.thumb} alt={img.title} loading="lazy" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="bhavana-lightbox-overlay" onClick={closeLightbox}>
                    <div className="bhavana-lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="bhavana-lightbox-close" onClick={closeLightbox}><FaTimes /></button>
                        <button className="bhavana-lightbox-nav prev" onClick={showPrev}><FaChevronLeft /></button>
                        <img src={images[lightboxIndex].src} alt={images[lightboxIndex].title} />
                        <button className="bhavana-lightbox-nav next" onClick={showNext}><FaChevronRight /></button>
                        <div className="bhavana-lightbox-caption">
                            {images[lightboxIndex].title}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UgadiBhavanaGallery2025;
