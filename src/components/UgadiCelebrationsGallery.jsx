import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './UgadiCelebrationsGallery.css';

const images = [
    { id: 1, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6864.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6864-400x284.jpg', title: 'IMG_6864' },
    { id: 2, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6877.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6877-400x284.jpg', title: 'IMG_6877' },
    { id: 3, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6878.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6878-400x284.jpg', title: 'IMG_6878' },
    { id: 4, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6888.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6888-400x284.jpg', title: 'IMG_6888' },
    { id: 5, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6891.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6891-400x284.jpg', title: 'IMG_6891' },
    { id: 6, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6897.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6897-400x284.jpg', title: 'IMG_6897' },
    { id: 7, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6902.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6902-400x284.jpg', title: 'IMG_6902' },
    { id: 8, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6916.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6916-400x284.jpg', title: 'IMG_6916' },
    { id: 9, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6930.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6930-400x284.jpg', title: 'IMG_6930' },
    { id: 10, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6953.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6953-400x284.jpg', title: 'IMG_6953' },
    { id: 11, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6960.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6960-400x284.jpg', title: 'IMG_6960' },
    { id: 12, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6967.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6967-400x284.jpg', title: 'IMG_6967' },
    { id: 13, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6968.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6968-400x284.jpg', title: 'IMG_6968' },
    { id: 14, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6969.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6969-400x284.jpg', title: 'IMG_6969' },
    { id: 15, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6973.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6973-400x284.jpg', title: 'IMG_6973' },
    { id: 16, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6978.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6978-400x284.jpg', title: 'IMG_6978' },
    { id: 17, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6982.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6982-400x284.jpg', title: 'IMG_6982' },
    { id: 18, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6996.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6996-400x284.jpg', title: 'IMG_6996' },
    { id: 19, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6997.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_6997-400x284.jpg', title: 'IMG_6997' },
    { id: 20, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7001.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7001-400x284.jpg', title: 'IMG_7001' },
    { id: 21, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7003.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7003-400x284.jpg', title: 'IMG_7003' },
    { id: 22, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7005.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7005-400x284.jpg', title: 'IMG_7005' },
    { id: 23, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7009.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7009-400x284.jpg', title: 'IMG_7009' },
    { id: 24, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7014.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7014-400x284.jpg', title: 'IMG_7014' },
    { id: 25, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7023.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7023-400x284.jpg', title: 'IMG_7023' },
    { id: 26, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7026.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7026-400x284.jpg', title: 'IMG_7026' },
    { id: 27, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7028.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7028-400x284.jpg', title: 'IMG_7028' },
    { id: 28, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7031.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7031-400x284.jpg', title: 'IMG_7031' },
    { id: 29, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7034.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7034-400x284.jpg', title: 'IMG_7034' },
    { id: 30, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7037.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7037-400x284.jpg', title: 'IMG_7037' },
    { id: 31, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7044.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7044-400x284.jpg', title: 'IMG_7044' },
    { id: 32, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7045.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7045-400x284.jpg', title: 'IMG_7045' },
    { id: 33, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7048.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7048-400x284.jpg', title: 'IMG_7048' },
    { id: 34, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7055.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7055-400x284.jpg', title: 'IMG_7055' },
    { id: 35, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7061.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7061-400x284.jpg', title: 'IMG_7061' },
    { id: 36, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7062.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7062-400x284.jpg', title: 'IMG_7062' },
    { id: 37, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7069.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7069-400x284.jpg', title: 'IMG_7069' },
    { id: 38, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7074.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7074-400x284.jpg', title: 'IMG_7074' },
    { id: 39, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7075.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7075-400x284.jpg', title: 'IMG_7075' },
    { id: 40, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7076.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7076-400x284.jpg', title: 'IMG_7076' },
    { id: 41, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7079.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7079-400x284.jpg', title: 'IMG_7079' },
    { id: 42, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7080.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7080-400x284.jpg', title: 'IMG_7080' },
    { id: 43, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7086.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7086-400x284.jpg', title: 'IMG_7086' },
    { id: 44, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7087.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7087-400x284.jpg', title: 'IMG_7087' },
    { id: 45, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7091.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7091-400x284.jpg', title: 'IMG_7091' },
    { id: 46, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7092.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7092-400x284.jpg', title: 'IMG_7092' },
    { id: 47, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7099.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7099-400x284.jpg', title: 'IMG_7099' },
    { id: 48, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7106.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7106-400x284.jpg', title: 'IMG_7106' },
    { id: 49, src: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7109.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/IMG_7109-400x284.jpg', title: 'IMG_7109' },
];

const UgadiCelebrationsGallery = () => {
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
            <section className="event-gallery-hero ugadi-hero">
                <div className="event-gallery-hero-overlay"></div>
                <div className="event-gallery-hero-content fade-up">
                    <h1>MKS Ugadi Celebrations Gallery</h1>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="event-gallery-grid-section">
                <div className="event-gallery-container">
                    <div className="event-gallery-section-header">
                        <h2 className="event-grid-title">MKS Ugadi Celebrations Gallery</h2>
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

export default UgadiCelebrationsGallery;
