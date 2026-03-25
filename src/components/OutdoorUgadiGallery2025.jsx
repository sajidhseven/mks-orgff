import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './OutdoorUgadiGallery2025.css';

const images = [
    { id: 1, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1086.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1086-400x284.jpg', title: 'IMG_1086' },
    { id: 2, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1087.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1087-400x284.jpg', title: 'IMG_1087' },
    { id: 3, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1091.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1091-400x284.jpg', title: 'IMG_1091' },
    { id: 4, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1093.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1093-400x284.jpg', title: 'IMG_1093' },
    { id: 5, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1099.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1099-400x284.jpg', title: 'IMG_1099' },
    { id: 6, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1118.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1118-400x284.jpg', title: 'IMG_1118' },
    { id: 7, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1121.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1121-400x284.jpg', title: 'IMG_1121' },
    { id: 8, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1124.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1124-400x284.jpg', title: 'IMG_1124' },
    { id: 9, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1130.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1130-400x284.jpg', title: 'IMG_1130' },
    { id: 10, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1132.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1132-400x284.jpg', title: 'IMG_1132' },
    { id: 11, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1138.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1138-400x284.jpg', title: 'IMG_1138' },
    { id: 12, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1139.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1139-400x284.jpg', title: 'IMG_1139' },
    { id: 13, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1142.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1142-400x284.jpg', title: 'IMG_1142' },
    { id: 14, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1147.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1147-400x284.jpg', title: 'IMG_1147' },
    { id: 15, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1154.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1154-400x284.jpg', title: 'IMG_1154' },
    { id: 16, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1163.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1163-400x284.jpg', title: 'IMG_1163' },
    { id: 17, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1166.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1166-400x284.jpg', title: 'IMG_1166' },
    { id: 18, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1169.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1169-400x284.jpg', title: 'IMG_1169' },
    { id: 19, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1181.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1181-400x284.jpg', title: 'IMG_1181' },
    { id: 20, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1188.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1188-400x284.jpg', title: 'IMG_1188' },
    { id: 21, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1200.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1200-400x284.jpg', title: 'IMG_1200' },
    { id: 22, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1204.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1204-400x284.jpg', title: 'IMG_1204' },
    { id: 23, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1213.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1213-400x284.jpg', title: 'IMG_1213' },
    { id: 24, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1223.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1223-400x284.jpg', title: 'IMG_1223' },
    { id: 25, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1235.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1235-400x284.jpg', title: 'IMG_1235' },
    { id: 26, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1299.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1299-400x284.jpg', title: 'IMG_1299' },
    { id: 27, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1305.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1305-400x284.jpg', title: 'IMG_1305' },
    { id: 28, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1321.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1321-400x284.jpg', title: 'IMG_1321' },
    { id: 29, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1324.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1324-400x284.jpg', title: 'IMG_1324' },
    { id: 30, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1400.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1400-400x284.jpg', title: 'IMG_1400' },
    { id: 31, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1440.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1440-400x284.jpg', title: 'IMG_1440' },
    { id: 32, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1457.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1457-400x284.jpg', title: 'IMG_1457' },
    { id: 33, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1482.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1482-400x284.jpg', title: 'IMG_1482' },
    { id: 34, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1517.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1517-400x284.jpg', title: 'IMG_1517' },
    { id: 35, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1527.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1527-400x284.jpg', title: 'IMG_1527' },
    { id: 36, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1569.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1569-400x284.jpg', title: 'IMG_1569' },
    { id: 37, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1587.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1587-400x284.jpg', title: 'IMG_1587' },
    { id: 38, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1588.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1588-400x284.jpg', title: 'IMG_1588' },
    { id: 39, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1647.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1647-400x284.jpg', title: 'IMG_1647' },
    { id: 40, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1675.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1675-400x284.jpg', title: 'IMG_1675' },
    { id: 41, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1726.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1726-400x284.jpg', title: 'IMG_1726' },
    { id: 42, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1729.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1729-400x284.jpg', title: 'IMG_1729' },
    { id: 43, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1750.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1750-400x284.jpg', title: 'IMG_1750' },
    { id: 44, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1761.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1761-400x284.jpg', title: 'IMG_1761' },
    { id: 45, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1765.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1765-400x284.jpg', title: 'IMG_1765' },
    { id: 46, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1766.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1766-400x284.jpg', title: 'IMG_1766' },
    { id: 47, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1771.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1771-400x284.jpg', title: 'IMG_1771' },
    { id: 48, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1791.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1791-400x284.jpg', title: 'IMG_1791' },
];

const OutdoorUgadiGallery2025 = () => {
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
            <section className="event-gallery-hero">
                <div className="event-gallery-hero-overlay"></div>
                <div className="event-gallery-hero-content fade-up">
                    <h1>Outdoor Ugadi Celebrations – 2025</h1>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="event-gallery-grid-section">
                <div className="event-gallery-container">
                    <div className="event-gallery-section-header">
                        <h2 className="event-grid-title">Outdoor Ugadi Celebrations – 2025</h2>
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

export default OutdoorUgadiGallery2025;


