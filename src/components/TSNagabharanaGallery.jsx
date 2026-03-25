import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './TSNagabharanaGallery.css';

const images = [
    { id: 1, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_1-400x284.jpg', title: 'IMG_1' },
    { id: 2, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9588-scaled.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9588-400x284.jpg', title: 'IMG_9588' },
    { id: 3, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9591.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9591-400x284.jpg', title: 'IMG_9591' },
    { id: 4, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9592.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9592-400x284.jpg', title: 'IMG_9592' },
    { id: 5, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9594.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9594-400x284.jpg', title: 'IMG_9594' },
    { id: 6, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9597.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9597-400x284.jpg', title: 'IMG_9597' },
    { id: 7, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9599.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9599-400x284.jpg', title: 'IMG_9599' },
    { id: 8, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9601.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9601-400x284.jpg', title: 'IMG_9601' },
    { id: 9, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9605.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9605-400x284.jpg', title: 'IMG_9605' },
    { id: 10, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9607.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9607-400x284.jpg', title: 'IMG_9607' },
    { id: 11, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9613.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9613-400x284.jpg', title: 'IMG_9613' },
    { id: 12, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9614.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9614-400x284.jpg', title: 'IMG_9614' },
    { id: 13, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9625.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9625-400x284.jpg', title: 'IMG_9625' },
    { id: 14, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9629.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9629-400x284.jpg', title: 'IMG_9629' },
    { id: 15, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9635.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9635-400x284.jpg', title: 'IMG_9635' },
    { id: 16, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9637.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9637-400x284.jpg', title: 'IMG_9637' },
    { id: 17, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9642.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9642-400x284.jpg', title: 'IMG_9642' },
    { id: 18, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9647.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9647-400x284.jpg', title: 'IMG_9647' },
    { id: 19, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9651.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9651-400x284.jpg', title: 'IMG_9651' },
    { id: 20, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9652.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9652-400x284.jpg', title: 'IMG_9652' },
    { id: 21, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9653.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9653-400x284.jpg', title: 'IMG_9653' },
    { id: 22, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9655.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9655-400x284.jpg', title: 'IMG_9655' },
    { id: 23, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9656.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9656-400x284.jpg', title: 'IMG_9656' },
    { id: 24, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9657.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9657-400x284.jpg', title: 'IMG_9657' },
    { id: 25, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9659.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9659-400x284.jpg', title: 'IMG_9659' },
    { id: 26, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9665.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9665-400x284.jpg', title: 'IMG_9665' },
    { id: 27, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9668.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9668-400x284.jpg', title: 'IMG_9668' },
    { id: 28, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9670.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9670-400x284.jpg', title: 'IMG_9670' },
    { id: 29, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9671.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9671-400x284.jpg', title: 'IMG_9671' },
    { id: 30, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9672.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9672-400x284.jpg', title: 'IMG_9672' },
    { id: 31, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9674.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9674-400x284.jpg', title: 'IMG_9674' },
    { id: 32, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9677.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9677-400x284.jpg', title: 'IMG_9677' },
    { id: 33, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9679.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9679-400x284.jpg', title: 'IMG_9679' },
    { id: 34, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9683.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9683-400x284.jpg', title: 'IMG_9683' },
    { id: 35, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9684.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9684-400x284.jpg', title: 'IMG_9684' },
    { id: 36, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9687.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9687-400x284.jpg', title: 'IMG_9687' },
    { id: 37, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9692.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9692-400x284.jpg', title: 'IMG_9692' },
    { id: 38, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9694.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9694-400x284.jpg', title: 'IMG_9694' },
    { id: 39, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9703.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9703-400x284.jpg', title: 'IMG_9703' },
    { id: 40, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9721.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9721-400x284.jpg', title: 'IMG_9721' },
    { id: 41, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9726.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9726-400x284.jpg', title: 'IMG_9726' },
    { id: 42, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9732.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9732-400x284.jpg', title: 'IMG_9732' },
    { id: 43, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9738.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9738-400x284.jpg', title: 'IMG_9738' },
    { id: 44, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9740.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9740-400x284.jpg', title: 'IMG_9740' },
    { id: 45, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9741.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9741-400x284.jpg', title: 'IMG_9741' },
    { id: 46, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9748.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9748-400x284.jpg', title: 'IMG_9748' },
    { id: 47, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9750.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9750-400x284.jpg', title: 'IMG_9750' },
    { id: 48, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9752.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9752-400x284.jpg', title: 'IMG_9752' },
    { id: 49, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9754.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9754-400x284.jpg', title: 'IMG_9754' },
    { id: 50, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9756.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_9756-400x284.jpg', title: 'IMG_9756' },
];

const TSNagabharanaGallery = () => {
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
            <section className="event-gallery-hero naga-hero">
                <div className="event-gallery-hero-overlay"></div>
                <div className="event-gallery-hero-content fade-up">
                    <h1>T S Nagabharana Meet and Greet Gallery</h1>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="event-gallery-grid-section">
                <div className="event-gallery-container">
                    <div className="event-gallery-section-header">
                        <h2 className="event-grid-title">T S Nagabharana Meet and Greet</h2>
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

export default TSNagabharanaGallery;
