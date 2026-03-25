import { Link } from 'react-router-dom';
import './Gallery.css';

const albums = [
    {
        id: 1,
        title: "Outdoor Ugadi Celebrations – 2025",
        date: "Sunday 13 April 2025 11:00 AM – 2:30 PM",
        venue: "Treasury Gardens, 2-18 Spring Street, East Melbourne Vic 3002",
        image: "https://mks.org.au/wp-content/uploads/2026/02/IMG_1675.jpg",
        link: "/outdoor-ugadi-celebrations-gallery-2025"
    },
    {
        id: 2,
        title: "MKS UGADI EVENT - KANNADA BHAVANA 2025",
        date: "Saturday 5th April 2025 5:00 PM – 8:00 PM",
        venue: "Melbourne Kannada Bhavana, 1173 -1175, Heatherton Road, Noble Park Vic 3174",
        image: "https://mks.org.au/wp-content/uploads/2026/02/IMG_1038.jpg",
        link: "/ugadi-event-kannada-bhavana-gallery-2025"
    },
    {
        id: 3,
        title: "Kannada Rajyotsava 2025",
        date: "Saturday, 29th November 2025 From 3:00 PM",
        venue: "Springvale Town Hall",
        image: "https://mks.org.au/wp-content/uploads/2026/02/Copy-of-2_25MKS-66-1.jpg",
        link: "/kannada-rajyotsava-gallery-2025"
    },
    {
        id: 4,
        title: "T S Nagabharana Meet and Greet",
        date: "2025",
        venue: "Melbourne Kannada Bhavana",
        image: "https://mks.org.au/wp-content/uploads/2026/02/IMG_9647.jpg",
        link: "/ts-nagabharana-meet-and-greet-gallery"
    },
    {
        id: 5,
        title: "Badminton Tournament 2025",
        date: "10 Aug 2025",
        venue: "Badminton Connect Nobel Park",
        image: "https://mks.org.au/wp-content/uploads/2026/02/DSC6395-1.jpg",
        link: "/badminton-tournament-gallery-2025"
    },
    {
        id: 6,
        title: "MKS Ugadi Celebrations",
        date: "2025",
        venue: "Melbourne Kannada Bhavana",
        image: "https://mks.org.au/wp-content/uploads/2026/02/IMG_7106-1.jpg",
        link: "/mks-ugadi-celebrations-gallery"
    }
];

const Gallery = () => {
    return (
        <div className="gallery-page-wrapper">
            {/* ================= GALLERY HERO ================= */}
            <section
                className="gallery-hero-section"
                style={{
                    backgroundImage: "url('https://mks.org.au/wp-content/uploads/2026/02/IMG_1675.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="gallery-hero-overlay"></div>
                <div className="gallery-hero-content fade-up">
                    <h1 className="gallery-hero-title">Gallery</h1>
                </div>
            </section>

            {/* ================= ALBUMS GRID ================= */}
            <section className="gallery-albums-section">
                <div className="gallery-albums-container">
                    <div className="gallery-albums-grid">
                        {albums.map((album) => (
                            <Link 
                                to={album.link || "#"} 
                                key={album.id} 
                                className="gallery-album-card"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div className="gallery-album-img-wrapper">
                                    <img src={album.image} alt={album.title} className="gallery-album-img" />
                                </div>
                                <div className="gallery-album-content">
                                    <h4 className="gallery-album-title"><span>{album.title}</span></h4>
                                    <div className="gallery-album-details">
                                        <p><strong>Event Date:</strong> {album.date}</p>
                                        <p><strong>Venue:</strong> {album.venue}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
