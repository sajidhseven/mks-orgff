import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './KannadaRajyotsavaGallery2025.css';

const images = [
    { id: 1, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-3.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-3-400x284.jpg', title: 'Copy of 1_25MKS-3' },
    { id: 2, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-6.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-6-400x284.jpg', title: 'Copy of 1_25MKS-6' },
    { id: 3, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-8.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-8-400x284.jpg', title: 'Copy of 1_25MKS-8' },
    { id: 4, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-10.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-10-400x284.jpg', title: 'Copy of 1_25MKS-10' },
    { id: 5, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-12.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-12-400x284.jpg', title: 'Copy of 1_25MKS-12' },
    { id: 6, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-13.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-13-400x284.jpg', title: 'Copy of 1_25MKS-13' },
    { id: 7, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-17.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-17-400x284.jpg', title: 'Copy of 1_25MKS-17' },
    { id: 8, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-20.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-20-400x284.jpg', title: 'Copy of 1_25MKS-20' },
    { id: 9, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-25.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-25-400x284.jpg', title: 'Copy of 1_25MKS-25' },
    { id: 10, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-26.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-26-400x284.jpg', title: 'Copy of 1_25MKS-26' },
    { id: 11, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-28.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-28-400x284.jpg', title: 'Copy of 1_25MKS-28' },
    { id: 12, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-31.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-31-400x284.jpg', title: 'Copy of 1_25MKS-31' },
    { id: 13, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-32.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-32-400x284.jpg', title: 'Copy of 1_25MKS-32' },
    { id: 14, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-37.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-37-400x284.jpg', title: 'Copy of 1_25MKS-37' },
    { id: 15, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-41.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-41-400x284.jpg', title: 'Copy of 1_25MKS-41' },
    { id: 16, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-46.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-46-400x284.jpg', title: 'Copy of 1_25MKS-46' },
    { id: 17, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-51.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-51-400x284.jpg', title: 'Copy of 1_25MKS-51' },
    { id: 18, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-53.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-53-400x284.jpg', title: 'Copy of 1_25MKS-53' },
    { id: 19, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-54.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-54-400x284.jpg', title: 'Copy of 1_25MKS-54' },
    { id: 20, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-64.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-64-400x284.jpg', title: 'Copy of 1_25MKS-64' },
    { id: 21, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-71.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-71-400x284.jpg', title: 'Copy of 1_25MKS-71' },
    { id: 22, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-76.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-76-400x284.jpg', title: 'Copy of 1_25MKS-76' },
    { id: 23, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-81.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-81-400x284.jpg', title: 'Copy of 1_25MKS-81' },
    { id: 24, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-82.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-82-400x284.jpg', title: 'Copy of 1_25MKS-82' },
    { id: 25, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-90.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-90-400x284.jpg', title: 'Copy of 1_25MKS-90' },
    { id: 26, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-95.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-95-400x284.jpg', title: 'Copy of 1_25MKS-95' },
    { id: 27, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-101.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-101-400x284.jpg', title: 'Copy of 1_25MKS-101' },
    { id: 28, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-103.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-103-400x284.jpg', title: 'Copy of 1_25MKS-103' },
    { id: 29, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-106.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-106-400x284.jpg', title: 'Copy of 1_25MKS-106' },
    { id: 30, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-118.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-118-400x284.jpg', title: 'Copy of 1_25MKS-118' },
    { id: 31, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-125.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-125-400x284.jpg', title: 'Copy of 1_25MKS-125' },
    { id: 32, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-131.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-131-400x284.jpg', title: 'Copy of 1_25MKS-131' },
    { id: 33, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-141.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-141-400x284.jpg', title: 'Copy of 1_25MKS-141' },
    { id: 34, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-159.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-159-400x284.jpg', title: 'Copy of 1_25MKS-159' },
    { id: 35, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-162.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-162-400x284.jpg', title: 'Copy of 1_25MKS-162' },
    { id: 36, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-165.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-165-400x284.jpg', title: 'Copy of 1_25MKS-165' },
    { id: 37, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-170.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-170-400x284.jpg', title: 'Copy of 1_25MKS-170' },
    { id: 38, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-173.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-173-400x284.jpg', title: 'Copy of 1_25MKS-173' },
    { id: 39, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-174.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-174-400x284.jpg', title: 'Copy of 1_25MKS-174' },
    { id: 40, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-177.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-177-400x284.jpg', title: 'Copy of 1_25MKS-177' },
    { id: 41, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-181.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-181-400x284.jpg', title: 'Copy of 1_25MKS-181' },
    { id: 42, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-185.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-185-400x284.jpg', title: 'Copy of 1_25MKS-185' },
    { id: 43, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-191.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-191-400x284.jpg', title: 'Copy of 1_25MKS-191' },
    { id: 44, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-193.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-193-400x284.jpg', title: 'Copy of 1_25MKS-193' },
    { id: 45, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-196.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-196-400x284.jpg', title: 'Copy of 1_25MKS-196' },
    { id: 46, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-205.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-205-400x284.jpg', title: 'Copy of 1_25MKS-205' },
    { id: 47, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-210.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-210-400x284.jpg', title: 'Copy of 1_25MKS-210' },
    { id: 48, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-215.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-215-400x284.jpg', title: 'Copy of 1_25MKS-215' },
    { id: 49, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-220.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-220-400x284.jpg', title: 'Copy of 1_25MKS-220' },
    { id: 50, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-240.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-240-400x284.jpg', title: 'Copy of 1_25MKS-240' },
    { id: 51, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-248.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-248-400x284.jpg', title: 'Copy of 1_25MKS-248' },
    { id: 52, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-297.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-297-400x284.jpg', title: 'Copy of 1_25MKS-297' },
    { id: 53, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-300.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-1_25MKS-300-400x284.jpg', title: 'Copy of 1_25MKS-300' },
    { id: 54, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-7.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-7-400x284.jpg', title: 'Copy of 2_25MKS-7' },
    { id: 55, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-11.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-11-400x284.jpg', title: 'Copy of 2_25MKS-11' },
    { id: 56, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-23.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-23-400x284.jpg', title: 'Copy of 2_25MKS-23' },
    { id: 57, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-33.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-33-400x284.jpg', title: 'Copy of 2_25MKS-33' },
    { id: 58, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-40.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-40-400x284.jpg', title: 'Copy of 2_25MKS-40' },
    { id: 59, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-42.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-42-400x284.jpg', title: 'Copy of 2_25MKS-42' },
    { id: 60, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-51.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-51-400x284.jpg', title: 'Copy of 2_25MKS-51' },
    { id: 61, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-53.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-53-400x284.jpg', title: 'Copy of 2_25MKS-53' },
    { id: 62, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-58.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-58-400x284.jpg', title: 'Copy of 2_25MKS-58' },
    { id: 63, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-64.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-64-400x284.jpg', title: 'Copy of 2_25MKS-64' },
    { id: 64, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-66.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-66-400x284.jpg', title: 'Copy of 2_25MKS-66' },
    { id: 65, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-3.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-3-400x284.jpg', title: 'Copy of 3_25MKS-3' },
    { id: 66, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-4.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-4-400x284.jpg', title: 'Copy of 3_25MKS-4' },
    { id: 67, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-11.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-11-400x284.jpg', title: 'Copy of 3_25MKS-11' },
    { id: 68, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-16.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-16-400x284.jpg', title: 'Copy of 3_25MKS-16' },
    { id: 69, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-22.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-22-400x284.jpg', title: 'Copy of 3_25MKS-22' },
    { id: 70, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-42.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-42-400x284.jpg', title: 'Copy of 3_25MKS-42' },
    { id: 71, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-54.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-54-400x284.jpg', title: 'Copy of 3_25MKS-54' },
    { id: 72, src: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-78.jpg', thumb: 'https://mks.org.au/wp-content/uploads/2026/02/Copy-of-3_25MKS-78-400x284.jpg', title: 'Copy of 3_25MKS-78' },
];

const KannadaRajyotsavaGallery2025 = () => {
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
            <section className="event-gallery-hero rajyotsava-hero">
                <div className="event-gallery-hero-overlay"></div>
                <div className="event-gallery-hero-content fade-up">
                    <h1>Kannada Rajyotsava Gallery 2025</h1>
                    <p>Saturday, 29th November 2025 • Springvale Town Hall</p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="event-gallery-grid-section">
                <div className="event-gallery-container">
                    <div className="event-gallery-section-header">
                        <h2 className="event-grid-title">Rajyotsava – 2025</h2>
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

export default KannadaRajyotsavaGallery2025;
