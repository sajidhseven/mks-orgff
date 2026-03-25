import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './BadmintonGallery2025.css';

const images = [
    { id: 1, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6334.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6334-400x284.jpg', title: 'DSC6334' },
    { id: 2, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6336.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6336-400x284.jpg', title: 'DSC6336' },
    { id: 3, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6337.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6337-400x284.jpg', title: 'DSC6337' },
    { id: 4, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6339.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6339-400x284.jpg', title: 'DSC6339' },
    { id: 5, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6340.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6340-400x284.jpg', title: 'DSC6340' },
    { id: 6, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6342.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6342-400x284.jpg', title: 'DSC6342' },
    { id: 7, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6347-scaled.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6347-400x284.jpg', title: 'DSC6347' },
    { id: 8, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6352.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6352-400x284.jpg', title: 'DSC6352' },
    { id: 9, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6358.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6358-400x284.jpg', title: 'DSC6358' },
    { id: 10, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6359.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6359-400x284.jpg', title: 'DSC6359' },
    { id: 11, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6363.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6363-400x284.jpg', title: 'DSC6363' },
    { id: 12, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6370.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6370-400x284.jpg', title: 'DSC6370' },
    { id: 13, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6372.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6372-400x284.jpg', title: 'DSC6372' },
    { id: 14, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6376.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6376-400x284.jpg', title: 'DSC6376' },
    { id: 15, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6377.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6377-400x284.jpg', title: 'DSC6377' },
    { id: 16, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6380.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6380-400x284.jpg', title: 'DSC6380' },
    { id: 17, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6382.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6382-400x284.jpg', title: 'DSC6382' },
    { id: 18, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6386.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6386-400x284.jpg', title: 'DSC6386' },
    { id: 19, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6392.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6392-400x284.jpg', title: 'DSC6392' },
    { id: 20, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6395.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6395-400x284.jpg', title: 'DSC6395' },
    { id: 21, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6398.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6398-400x284.jpg', title: 'DSC6398' },
    { id: 22, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6401.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6401-400x284.jpg', title: 'DSC6401' },
    { id: 23, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6402.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6402-400x284.jpg', title: 'DSC6402' },
    { id: 24, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6406-1.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6406-1-400x284.jpg', title: 'DSC6406-1' },
    { id: 25, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6411.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6411-400x284.jpg', title: 'DSC6411' },
    { id: 26, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6424-scaled.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6424-400x284.jpg', title: 'DSC6424' },
    { id: 27, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6426.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6426-400x284.jpg', title: 'DSC6426' },
    { id: 28, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6438.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6438-400x284.jpg', title: 'DSC6438' },
    { id: 29, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6455.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6455-400x284.jpg', title: 'DSC6455' },
    { id: 30, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6460.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6460-400x284.jpg', title: 'DSC6460' },
    { id: 31, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6498.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6498-400x284.jpg', title: 'DSC6498' },
    { id: 32, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6501.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6501-400x284.jpg', title: 'DSC6501' },
    { id: 33, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6505.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6505-400x284.jpg', title: 'DSC6505' },
    { id: 34, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6507.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6507-400x284.jpg', title: 'DSC6507' },
    { id: 35, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6524.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6524-400x284.jpg', title: 'DSC6524' },
    { id: 36, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6527.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6527-400x284.jpg', title: 'DSC6527' },
    { id: 37, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6531.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6531-400x284.jpg', title: 'DSC6531' },
    { id: 38, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6546.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6546-400x284.jpg', title: 'DSC6546' },
    { id: 39, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6586.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6586-400x284.jpg', title: 'DSC6586' },
    { id: 40, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6607.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6607-400x284.jpg', title: 'DSC6607' },
    { id: 41, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6632.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6632-400x284.jpg', title: 'DSC6632' },
    { id: 42, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6655.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6655-400x284.jpg', title: 'DSC6655' },
    { id: 43, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6658.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6658-400x284.jpg', title: 'DSC6658' },
    { id: 44, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6661.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6661-400x284.jpg', title: 'DSC6661' },
    { id: 45, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6663.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6663-400x284.jpg', title: 'DSC6663' },
    { id: 46, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6668.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6668-400x284.jpg', title: 'DSC6668' },
    { id: 47, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6676.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6676-400x284.jpg', title: 'DSC6676' },
    { id: 48, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6685.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6685-400x284.jpg', title: 'DSC6685' },
    { id: 49, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6686.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6686-400x284.jpg', title: 'DSC6686' },
    { id: 50, src: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6695.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/DSC6695-400x284.jpg', title: 'DSC6695' },
];

const BadmintonGallery2025 = () => {
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
        <div className="event-gallery-wrapper">
            {/* Hero Section */}
            <section className="event-gallery-hero badminton-hero">
                <div className="event-gallery-hero-overlay"></div>
                <div className="event-gallery-hero-content fade-up">
                    <h1>Badminton Tournament Gallery – 2025</h1>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="event-gallery-grid-section">
                <div className="event-gallery-container">
                    <div className="event-gallery-section-header">
                        <h2 className="event-grid-title">Badminton Tournament Gallery – 2025</h2>
                    </div>
                    <div className="event-gallery-grid">
                        {images.map((img, index) => (
                            <div key={img.id} className="event-gallery-item" onClick={() => openLightbox(index)}>
                                <div className="event-gallery-img-wrapper">
                                    <img src={img.thumb} alt={img.title} loading="lazy" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="event-lightbox-overlay" onClick={closeLightbox}>
                    <div className="event-lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="event-lightbox-close" onClick={closeLightbox}><FaTimes /></button>
                        <button className="event-lightbox-nav prev" onClick={showPrev}><FaChevronLeft /></button>
                        <img src={images[lightboxIndex].src} alt={images[lightboxIndex].title} />
                        <button className="event-lightbox-nav next" onClick={showNext}><FaChevronRight /></button>
                        <div className="event-lightbox-caption">
                            {images[lightboxIndex].title}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BadmintonGallery2025;
