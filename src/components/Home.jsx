import React from "react";
import UpcomingEvents from "./UpcomingEvents";
import FacebookFeed from "./FacebookFeed";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Sponsors.css';

const Home = () => {

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



  
  // const upcomingEvents = [
  //   {
  //     title: "Ugadi Sambhrama 2026",
  //     date: "Saturday, 28 March 2026",
  //     location: "Springvale Town Hall",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   },
  //   {
  //     title: "Kannada Rajyotsava 2025",
  //     date: "Saturday, 15 Nov 2025",
  //     location: "Box Hill Town Hall",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   },
  //   {
  //     title: "Annual Sports Meet",
  //     date: "Sunday, 12 Oct 2025",
  //     location: "TBD",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   },
  //   {
  //     title: "Cultural Night",
  //     date: "Friday, 05 Sept 2025",
  //     location: "Springvale Town Hall",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   },
  //   {
  //     title: "Community Picnic",
  //     date: "Sunday, 15 Feb 2025",
  //     location: "Botanical Gardens",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   },
  //   {
  //     title: "Youth Workshop",
  //     date: "Saturday, 20 July 2025",
  //     location: "Community Center",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   },
  //   {
  //     title: "Women's Day Celebration",
  //     date: "Saturday, 08 March 2025",
  //     location: "MKS Hall",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   },
  //   {
  //     title: "Dasara Festival",
  //     date: "Saturday, 04 Oct 2025",
  //     location: "Springvale Town Hall",
  //     image: "https://mks.org.au/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-09.32.28.jpeg"
  //   }
  // ];



  // const duplicatedLogos = [...logos, ...logos];
  // const duplicated = [...supportedLogos, ...supportedLogos];

  return (
    <>
      {/* ================= WELCOME SECTION ================= */}
      <section className="welcome-section">
        <img src="/Hero1.jpg" alt="Welcome" className="welcome-bg-image" />
        <div className="welcome-overlay"></div>
        <div className="welcome-content">
          <h1>WELCOME TO MELBOURNE KANNADA SANGA</h1>
        </div>
      </section>

      {/* ================= HERO VIDEO ================= */}
      <section className="hero-section">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/Hero.jpg"
          disablePictureInPicture
        >
          <source
            src="https://mks.org.au/wp-content/uploads/2025/03/MKS-Video-prototype-1-1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Optional overlay for better text visibility */}
        <div className="video-overlay"></div>

      </section>

      <UpcomingEvents />
      <FacebookFeed />
      {/* ================= UPCOMING EVENTS ================= */}
      {/* <section className="mks-events-section">
        <div className="mks-events-container"> */}

      {/* TOP HEADER */}
      {/* <div className="mks-events-top">
            <h2>Upcoming Events</h2>


          </div> */}
      {/* FEATURED EVENT */}
      {/* <div
            className="mks-featured-event"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(91, 28, 28, 0.95), rgba(91, 28, 28, 0.6)), url("/Our-Story1.png")`
            }}
          >
            <div className="mks-featured-content">
              <h3>Kannada Rajyotsava Celebration</h3>
              <p>📅 Sat, Nov 18, 2024 | 5:00 PM</p>
              <p>📍 TBD Hall, Melbourne VIC</p>

              <div className="mks-featured-buttons">
                <button className="primary">Register Now</button>
                <button className="secondary">Add to Calendar</button>
                 <button className="tertiary">View More</button>
              </div>
            </div>
          </div> */}



      {/* EVENT GRID */}
      {/* <div className="mks-event-grid">

            <div className="mks-card">
              <div className="mks-card-img kids"></div>
              <div className="mks-card-body">
                <h4>Kannada Classes for Kids</h4>
                <p>📅 Sun, May 12, 2024</p>
                <p>📍 Kannada Bhavana, Melbourne</p>
                <button className="primary">Register Now</button>
                <button className="secondary">Add to Calendar</button>
                 <button className="tertiary">View More</button>
              </div>
            </div>

            <div className="mks-card">
              <div className="mks-card-img ugadi"></div>
              <div className="mks-card-body">
                <h4>Ugadi Festival</h4>
                <p>📅 Sat, Apr 13, 2024</p>
                <p>📍 TBD Hall, Melbourne</p>
                <button className="primary">Register Now</button>
                <button className="secondary">Add to Calendar</button>
                 <button className="tertiary">View More</button>
              </div>
            </div>

            <div className="mks-card">
              <div
                className="mks-card-img gala"
                style={{ backgroundImage: 'url("/Our-Story1.png")' }}
              ></div>
              <div className="mks-card-body">
                <h4>Fundraising Gala Night</h4>
                <p>📅 Fri, Jun 7, 2024</p>
                <p>📍 Grand Ballroom, Melbourne</p>
                <button className="primary">Register Now</button>
                <button className="secondary">Add to Calendar</button>
                 <button className="tertiary">View More</button>
              </div>
            </div>

            <div className="mks-card">
              <div className="mks-card-img seniors"></div>
              <div className="mks-card-body">
                <h4>Senior’s Meetup</h4>
                <p>📅 Tue, Jun 18, 2024</p>
                <p>📍 Local Community Center</p>
              <button className="primary">Register Now</button>
                <button className="secondary">Add to Calendar</button>
                 <button className="tertiary">View More</button>
              </div>
            </div>

          </div> */}

      {/* VIEW ALL */}
      {/* <div className="mks-view-all">
            <Link to="/upcoming-events">View All Events →</Link>
          </div>   */}

      {/* </div>
      </section> */}





      {/* Sponsors */}
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
            speed={800}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
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

        {/* Carousel */}
        <div className="sponsors-swiper-container">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            speed={800}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
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

    </>
  );
};

export default Home;

