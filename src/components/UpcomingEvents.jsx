import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const events = [
  {
    title: "Ugadi Sambhrama 2026 & 40th Anniversary Celebrations",
    date: "Saturday, 28 March 2026",
    location: "Springvale Town Hall, 397–405 Springvale Road, Springvale, VIC 3171",
    image: "https://mks.org.au/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-18-at-06.29.36.jpeg"
  }
];

export default function UpcomingEvents() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mks-events-section">

      <div className="mks-events-container">

        {/* HEADER */}
        <div className="mks-events-top">
          <h2>UPCOMING EVENTS</h2>
          <div className="mks-events-title-line"></div>
        </div>

        {/* FEATURED EVENT */}

        <div
          className="mks-featured-event"
          style={{
            backgroundImage: `url(${events[activeIndex].image})`
          }}
        >

          <div className="mks-featured-content">

            <h3>{events[activeIndex].title}</h3>

            <p>📅 {events[activeIndex].date}</p>

            <p>📍 {events[activeIndex].location}</p>

            <div className="mks-featured-buttons">

              <button className="primary">Register Now</button>

              <button className="secondary">Add to Calendar</button>

              <button className="tertiary">View More</button>

            </div>

          </div>

        </div>


        {/* THUMBNAIL SLIDER */}
        <div className="mks-thumbnail-slider">
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <img
                  src={event.image}
                  alt={event.title}
                  className={`mks-thumb ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* VIEW ALL */}

        <div className="mks-view-all">

          <a href="/upcoming-events">View All Events →</a>

        </div>

      </div>

    </section>
  );
}