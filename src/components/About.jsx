import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";

const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const achievements = [
    "Karnataka Government NRI grant",
    "Independence Day celebration",
    "Kannada Rajyotsava with “Maja Talkies” by Srujan Lokesh and Team",
    "Poetry concert and felicitation of renowned poet Shri Jayant Kaykini",
    "Makar Sankranti festival celebration",
    "Cooking competition on Yugadi",
    "Singing and appreciation program by Padma Shri awardee B. Jayashree",
    "A musical evening with Bhava Gita, Folk Gita, and film songs by Ratnamala Prakash and Mr. Pancham Halibandi",
    "Grant from Victoria Multicultural Community Fund",
    "Kannada Bhavana"
  ];

  const images = [
    "Our-Story1.png",
    "Our-Story2.png",
    "Our-Story3.png",
    "Our-Story4.png"
  ];

  // const committeeData = [
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png",
  //     title: "Executive Committee 2023-25",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png",
  //     title: "Team Members",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png",
  //     title: "Team Spirit",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png",
  //     title: "Executive Committee 2022",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png",
  //   },
  // ];

  return (
    <>

      {/* Banner Section */}
      <section className="about-banner">
        <div className="about-overlay">
          <div className="about-content">
            <img src="/logo.png" alt="MKS Logo" className="about-logo" />
            <h1 className="about-title">MELBOURNE KANNADA SANGHA</h1>
            <h2 className="about-subtitle">ಕನ್ನಡಿಗರ ಮನೆ – 1986 ರಿಂದ ಸೇವೆಯಲ್ಲಿ</h2>
            <p className="about-since">
              Since 1986 • Serving the Kannada Community in Australia
            </p>
          </div>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="our-story-container">

          <div className="our-story-slider">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="slide-item">
                  <img src={img} alt="Our Story" />
                </div>
              ))}
            </Slider>
          </div>

          <div className="our-story-content">
            <h2>Our Story</h2>
            <p>
              At <strong>Melbourne Kannada Sangha</strong>, culture is more than events —
              it is identity, belonging, and community.
            </p>
            <p>
              We create a welcoming space where members feel connected,
              valued and celebrated.
            </p>
            <p>
              Through festivals, cultural programs and community initiatives,
              we preserve traditions for future generations.
            </p>
            {/* <button className="our-story-btn">READ MORE</button> */}
          </div>

        </div>
      </section>


      {/* Growth Section */}
      <section className="growth-section">
        <div className="growth-container">
          <div className="growth-column">
            <p>
              MKS has grown exponentially by organizing mega cultural events,
              Kannada classes, library services and publishing the monthly
              magazine “MELNUDI”.
            </p>
            <p>
              MKS established Kannada Bhavana — one of the few outside India —
              built purely by volunteer support.
            </p>
          </div>

          <div className="growth-column">
            <p>
              Our vision includes community-driven growth with support from
              local patrons and life members.
            </p>
            <p>
              With Melbourne’s growing Indian population, MKS aims to expand
              its impact in the coming years.
            </p>
          </div>
        </div>
      </section>

       {/* ================= VERTICAL HISTORY TIMELINE ================= */}
      <section className="vertical-timeline-section">
        <div className="vertical-timeline-wrapper">

          <h2 className="vertical-timeline-main-title" style={{ fontSize: '32px', textTransform: 'uppercase' }}>OUR JOURNEY THROUGH THE DECADES</h2>
          <div className="vertical-timeline-header-line"></div>

          <div className="vertical-timeline-container">

            {/* ITEM 1 - 1986 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">1986</div>
              <div className="vertical-timeline-content right">
                <h3>Foundation</h3>
                <p>
                  Founded in April 1986, the Melbourne Kannada Sangha is dedicated to preserving and promoting Kannada culture, language, and heritage in Melbourne, Australia. Our mission is to ensure the welfare of the Kannada community, spread the beauty of the Kannada language worldwide, and celebrate the vibrant culture of Karnataka through various initiatives.
                </p>
                <p>
                  Since its inception, the Sangha has been at the forefront of organizing and supporting a multitude of local and international Kannada programs. Today, Melbourne is home to over 20,000 Kannadigas, and the Melbourne Kannada Sangha continues to grow in popularity, delivering exceptional service to the community.
                </p>
              </div>
            </div>

            {/* ITEM 2 - 1996 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date left-date">1996</div>
              <div className="vertical-timeline-content left">
                <h3>10th Anniversary</h3>
                <p>
                  The Sangha celebrated its 10th anniversary by inviting renowned singers and dramatists to Melbourne. This milestone event marked the Sangha’s growing influence and ability to bring together the community through cultural programs. That year, a grand celebration of the Dussehra festival was organized in October, featuring children’s performances in dance, music, and other entertainment. This set the tone for annual celebrations of Ugadi, Dussehra, and other festivals, which have since become a hallmark of the Sangha.
                </p>
              </div>
            </div>

            {/* ITEM 3 - 2004 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">2004</div>
              <div className="vertical-timeline-content right">
                <h3>Launch of the MKS Kannada Library</h3>
                <p>
                  In 2004, our Kannada Sangh was honoured with the visit of the then Home Minister of the Government of Karnataka and the Mayor of the Bangalore Metropolitan Corporation. They expressed their deep appreciation for our efforts in Melbourne and recognized the need for a Kannada library within our community. With the honourable minister’s personal interest, the library journey began with a generous donation of 500 books, weeklies, and magazines to the Melbourne Kannada Association.
                </p>
                <p>
                  Mr. Satish Savanoor took on the leadership of this library initiative and has been selflessly serving the Kannada community for the past 20 years. He started by offering library services on the first and third Sundays of each month at Jells Park and Dandenong Park, never missing a session, regardless of the weather—rain or shine. His dedication to the growth and continuity of our library has been nothing short of remarkable, and we remain forever grateful for his enduring commitment. Thanks to his efforts, the Monash City Council generously provided Clayton Hall for a full-fledged library, free of charge. Today, our library has blossomed into a thriving hub with a collection of over 2000 books, expanding year after year.
                </p>
                <p>
                  Additionally, our members have access to monthly Kannada weeklies and newspapers, further fostering our connection to our rich culture.
                </p>
                <p className="vertical-timeline-milestones-title">Some of our notable milestones include:</p>
                <ul className="vertical-timeline-milestones">
                  <li><strong>1.</strong> Successfully providing a collection of 200 small books to each of 150 village schools in Karnataka, thanks to the generous support of our members and sponsors.</li>
                  <li><strong>2.</strong> Celebrating the Silver Jubilee of the Melbourne Kannada Sangh in 2011 by distributing three unique books to each member as a special souvenir from our library.</li>
                  <li><strong>3.</strong> Publishing a high-quality memoir, “Belli Chukki,” compiled by a dedicated group of passionate individuals under the library’s patronage.</li>
                  <li><strong>4.</strong> Establishing a Kannada Book Club, which has grown significantly and has been consistently hosting meetings for the last 13 years.</li>
                  <li><strong>5.</strong> Introducing new library projects, such as an online quiz program on Kannada language knowledge, essay writing, Scholarships Club, VCE information Club, and university courses with internship opportunities.</li>
                </ul>
              </div>
            </div>

            {/* ITEM 4 - 2011 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date left-date">2011</div>
              <div className="vertical-timeline-content left">
                <h3>First International Kannada School</h3>
                <p>
                  In 2011, the Sangha established the first Kannada school overseas, starting with just 6 students. Today, the school has expanded to 300 students across four centres, supported by 12 volunteer teachers. This growth, facilitated by the Victorian School of Learning and the Government of Karnataka, stands as one of the Sangha's most remarkable achievements.
                </p>
              </div>
            </div>

            {/* ITEM 5 - 2012 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">2012</div>
              <div className="vertical-timeline-content right">
                <h3>25th Silver Jubilee</h3>
                <p>
                  The Melbourne Kannada Sangha celebrated its 25th anniversary in grand style, featuring a series of events, including:
                </p>
                <ul className="vertical-timeline-milestones">
                  <li>A discussion by renowned author Mr. S.L. Bhyrappa.</li>
                  <li>A speech by Captain Karnika.</li>
                  <li>"An Ideal Couple" program by famous actor Pranayaraja Srinath.</li>
                  <li>A mesmerizing performance by playback singer Vijay Prakash, adding a musical note to the festivities.</li>
                </ul>
                <p>
                  Following the Silver Jubilee, further entertainment programs were organized, including a popular music concert by Sri Chinmayi Atreyas and comedy shows by Mr. Richard Lewis.
                </p>
              </div>
            </div>

            {/* ITEM 6 - 2018 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date left-date">2018</div>
              <div className="vertical-timeline-content left">
                <h3>The Kannada Bhavan Initiative</h3>
                <p>
                  On November 10, 2018, during Kannada Rajyotsava, the Sangha launched a campaign for the construction of Kannada Bhavan, with Sandalwood superstar Dr. Shivrajkumar attending as the chief guest. The community honoured him with various titles, including "Moomba Star."
                </p>
              </div>
            </div>

            {/* ITEM 7 - 2019 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">2019</div>
              <div className="vertical-timeline-content right">
                <h3>Kannada Rajyotsava 2019 - with Upendra Couple</h3>
                <p>
                  In 2019, the Melbourne Kannada Sangha celebrated Kannada Rajyotsava with renowned Kannada actor and filmmaker Upendra, accompanied by his wife, actress Priyanka Upendra. The event featured cultural performances, inspiring speeches, and interactive sessions with the celebrity couple, making it a memorable occasion for the Kannada community in Melbourne. Their presence added a special charm to the celebrations, fostering a sense of pride and unity among Kannadigas.
                </p>
              </div>
            </div>

            {/* ITEM 8 - 2022 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date left-date">2022</div>
              <div className="vertical-timeline-content left">
                <h3>Kannada Rajyotsava 2022</h3>
                <p>
                  The Sangha proudly celebrated Kannada Rajyotsava on November 19, 2022, at Springvale Town Hall. Notable guests included Ramesh Aravind, a famous Kannada actor and director, and Gurukiran, an acclaimed music director.
                </p>
              </div>
            </div>

            {/* ITEM 9 - 2023 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">2023</div>
              <div className="vertical-timeline-content right">
                <h3>The Inauguration of Kannada Bhavan</h3>
                <p>
                  On July 8, 2023, the long-awaited Melbourne Kannada Bhavan was inaugurated at 1175 Heatherton Road, Melbourne. The Kannada Bhavan was inaugurated by the Honorable Minister for Multicultural Affairs and Minister for Housing, Colin Brooks MP, accompanied by Cassandra Fernando MP, Jason Wood MP, the President of Kannada Sahitya Parishad, Nadoja Dr. Mahesh Joshi, and the President of Kannada Sangha, Chandra Bangalore, along with other leaders and activists from the Melbourne Kannada Sangha and the wider community.
                </p>
                <p>
                  In his inspiring speech to the gathered audience, Colin Brooks MP congratulated the Kannadigas for their tireless efforts in establishing the Melbourne Kannada Bhavan. He appreciated the significant role of the Bhavan in fostering a vibrant and harmonious multicultural society in Australia.
                </p>
              </div>
            </div>

            {/* ITEM 10 - 2024 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date left-date">2024</div>
              <div className="vertical-timeline-content left">
                <h3>International Children's Festival</h3>
                <p>
                  The Melbourne Kannada Sangha encourages students from VSL schools to participate in the International Children's Festival held at the Melbourne Town Hall every year. This event is an important platform for developing cultural awareness, social competence and exposure to different cultures among children.
                </p>
                <p>
                  Students showcase their talents in various dance, music, drama and cultural programs. Under the guidance of the Melbourne Kannada Sangha, this festival is an excellent opportunity to introduce Kannada heritage to the children while giving them encouragement and confidence.
                </p>
                
                <h3 style={{ marginTop: '20px' }}>VSL Kannada School Annual Mentoring &amp; Speech Competitions</h3>
                <p>
                  The Melbourne Kannada Sangha has been organizing a number of meaningful programmes with an aim to preserve and promote the language and culture among Kannadigas residing in Australia. The most important of these are the annual recitation and elocution competitions.
                </p>
                <p>
                  These competitions are playing a significant role in inculcating the love of Kannada language, clear pronunciation and courage to speak in public among the students. Students of different age groups participated enthusiastically in the programme.
                </p>
                <p>
                  Well-known and experienced people in the community are invited to judge the competitions. All the participants will be given certificates and the winners will be awarded with medals.
                </p>
                <p>
                  Such efforts of the Melbourne Kannada Sangha will go a long way in making our next generation aware of the importance of Kannada language and culture.
                </p>
                
                <h3 style={{ marginTop: '20px' }}>Independence Day of India Celebration</h3>
                <p>
                  The Melbourne Kannada Sangha celebrates Indian Independence Day every year at all four campuses with the aim of spreading awareness of Indian national values and culture to the next generation. The programme will be conducted in collaboration with the teachers.
                </p>
                <p>
                  Children will be introduced to the importance of freedom through the hoisting of the national flag, patriotic songs and cultural programmes by the students. VSL area managers are invited as guests of honour on this occasion and their presence will add to the prestige of the event.
                </p>
                <p>
                  These efforts of the Melbourne Kannada Sangha to preserve and promote Indian heritage and patriotism abroad are highly commendable.
                </p>

                <h3 style={{ marginTop: '20px' }}>Dosa Mela</h3>
                <p>
                  The Melbourne Kannada Sangha organises the Dosa Mela every year. In this special program, all the volunteers of the association will prepare dosas for the community free of cost with their hard work and love.
                </p>
                <p>
                  The money collected through the fair will be used for the construction and maintenance of Kannada Bhavan. Dose Mela is a wonderful platform for Kannadigas to experience cultural bonding together and foster the spirit of cooperation and service, symbolizing the success of the community service work of Melbourne Kannada Sangha.
                </p>
              </div>
            </div>

            {/* ITEM 11 - 2025 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">2025</div>
              <div className="vertical-timeline-content right">
                <h3>Classical Art Programmes</h3>
                <p>
                  The Melbourne Kannada Sangha organises Bharatanatyam, Hindustani classical vocal, Carnatic music and other classical performances every year with the aim of introducing the next generation to Kannada culture and the legacy of Indian classical art.
                </p>
                <p>
                  At these events, talented artists showcase their great skills in front of the community. Participants will get to know the importance of Indian classical art by experiencing the beauty of music, dance and song.
                </p>
                <p>
                  These classical art events of the Melbourne Kannada Sangha will play a significant role in cultural awareness, artistic patronage and heritage preservation among Kannadigas, further strengthening the cultural bond of the community.
                </p>

                <h3 style={{ marginTop: '20px' }}>International Yoga Day</h3>
                <p>
                  The Melbourne Kannada Sangha has been organizing International Yoga Day celebrations meaningfully through VSL schools every year with the aim of promoting a healthy lifestyle and the importance of Indian heritage. The programme was attended by a large number of students, teachers and parents.
                </p>
                <p>
                  Children are taught the importance of physical and mental health through yogasanas, pranayama and meditation. These efforts of the Melbourne Kannada Sangha to spread the Indian Yoga tradition abroad to the next generation are commendable.
                </p>

                <h3 style={{ marginTop: '20px' }}>Film Exhibitions</h3>
                <p>
                  The Melbourne Kannada Sangha organises special film screenings every year to encourage new talent and start-ups in Kannada cinema. These events provide an opportunity for Kannadigas abroad to experience contemporary Kannada cinema.
                </p>
                <p>
                  Supporting the creative endeavours of new artists, directors and producers, these shows raise awareness and interest about Kannada cinema among the community. Through such initiatives, the Melbourne Kannada Sangha is playing an important role in promoting entrepreneurship along with cultural support.
                </p>

                <h3 style={{ marginTop: '20px' }}>Ugadi Celebrations</h3>
                <p>
                  Ugadi is celebrated every year by the Melbourne Kannada Sangha with the aim of preserving and promoting Kannada culture and heritage. The message of the New Year is introduced to the community through neem-jaggery reception, almanac reading and cultural programmes.
                </p>
                <p>
                  This program, which will spread the importance of our country's festivals abroad to the next generation, will strengthen the cultural bond between Kannadigas.
                </p>

                <h3 style={{ marginTop: '20px' }}>Annual Badminton Tournament</h3>
                <p>
                  The Melbourne Kannada Sangha has been successfully organizing the Badminton Games every year with the aim of promoting healthy lifestyle, sportsmanship and mutual cooperation among the community members. This event is an important sporting activity that unites members of different age groups and has a unique place among the annual events of the association.
                </p>
                <p>
                  Competitions will be held in different categories for men, women and children. A friendly atmosphere and a sportsman's attitude during the sporting event will give the program a special weed.
                </p>
                <p>
                  The winners of the competitions will be given prizes and certificates. This annual Badminton Games of the Melbourne Kannada Sangha is playing a significant role in strengthening health, unity and harmony among the members of the community.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="achievements-container">

          <h2 className="achievements-title" style={{ fontSize: '32px', textTransform: 'uppercase' }}>OUR ACHIEVEMENTS</h2>
           <div className="vertical-timeline-header-line"></div>

          <p className="achievements-description">
            The Melbourne Kannada Sangha has consistently been ranked as one of
            the most popular Kannada groups in recent years, thanks to its
            numerous cultural and entertainment programs, such as:
          </p>

          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div className="achievement-card" key={index}>
                <span className="achievement-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>




      {/* History Section */}
      {/* <section className="history-section">
        <div className="history-container">

          <div className="history-image">
            <img
              src="https://mks.org.au/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-24-at-13.05.06.jpeg"
              alt="MKS Event"
            />
          </div>

          <div className="history-content">
            <h2 className="history-title">History of MKS</h2>
            <div className="history-divider"></div>

            <p>
              Founded on 10 April 1986, Melbourne Kannada Sangha was formed
              to bring Kannadigas together and preserve language and culture.
            </p>

            <p>
              Over 36+ years, the Sangha has grown into a dynamic cultural
              association driven by dedicated volunteers.
            </p>

            <p>
              Registered as a non-profit incorporated association in 2005,
              MKS celebrates UGADI, DASARA and numerous cultural programs
              every year.
            </p>
          </div>

        </div>
      </section> */}
     

      {/* ================= 25TH ANNIVERSARY SECTION ================= */}
      {/* <section className="vsl-section milestone-section">
        <div className="vsl-container">
          <div className="vsl-grid inverse">
            <div className="vsl-content-col">
              <h2 className="vsl-title" style={{ fontSize: '32px', textTransform: 'uppercase', textAlign: 'center' }}>CELEBRATING OUR SILVER JUBILEE</h2>
              <div className="vertical-timeline-header-line" style={{ margin: '10px auto 20px' }}></div>
              <p className="vsl-text">
                The Melbourne Kannada Sangha celebrated its 25th anniversary in grand style, featuring a series of events, including:
              </p>
              <ul className="vsl-list">
                 <li>A discussion by renowned author S.L. Bhyrappa.</li>
                 <li>A speech by Captain G.R. Gopinath.</li>
                 <li>“An Ideal Couple” program by famous actor Pranayaraja Srinath.</li>
                 <li>A mesmerizing performance by playback singer Vijay Prakash, adding a musical note to the celebration.</li>
              </ul>
              <p className="vsl-text">
                Following the Silver Jubilee, further entertainment programs were organized, including a popular music concert by Sri Chinmayi Atreyas and comedy shows by Mr. Richard Lewis.
              </p>
            </div>

            <div className="vsl-image-col">
              <img
                src="https://mks.org.au/wp-content/uploads/2026/02/25-years.png"
                alt="25th Anniversary Celebration"
                className="vsl-image"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= 2011 VSL SECTION ================= */}
      {/* <section className="vsl-section">
        <div className="vsl-container">
          <div className="vsl-grid">

            <div className="vsl-image-col">
              <img
                src="vsl.png"
                alt="2011 First International Kannada School"
                className="vsl-image"
              />
            </div>

            <div className="vsl-content-col">
              <h2 className="vsl-title" style={{ fontSize: '32px', textTransform: 'uppercase', textAlign: 'center' }}>2011: FIRST INTERNATIONAL KANNADA SCHOOL</h2>
              <div className="vertical-timeline-header-line" style={{ margin: '10px auto 20px' }}></div>
              <p className="vsl-text">
                In 2011, the Sangha established the first Kannada school overseas, starting with just 6 students. Today, the school has expanded to 300 students across four centres, supported by 12 volunteer teachers. This growth, facilitated by the Victorian School of Learning and the Government of Karnataka, stands as one of the Sangha’s most remarkable achievements.
              </p>
            </div>

          </div>
        </div>
      </section> */}

      {/* ================= FEATURED FULL-WIDTH IMAGE ================= */}
      <section className="about-featured-image-section">
        <div className="about-featured-container">
          <img
            src="https://mks.org.au/wp-content/uploads/2026/02/Mks2.png"
            alt="Melbourne Kannada Sangha Featured"
            className="about-featured-img"
          />
        </div>
      </section>

      {/* Achievements */}

      {/* ================= PHOTO GALLERY ================= */}
      {/* <section className="gallery-section">
        <div className="gallery-container">

          <h2 className="gallery-heading">PHOTO GALLERY</h2>
          <div className="gallery-divider">
            <span></span>
            <div className="lotus">✿</div>
            <span></span>
          </div>

          <h3 className="gallery-subtitle">
            Moments from Our Community
          </h3>
          <p className="gallery-description">
            Explore memories from our vibrant cultural and spiritual events.
          </p>

          <div className="gallery-grid">
            {image.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="gallery-btn-wrapper">
            <button className="gallery-btn">View Full Gallery</button>
          </div>

        </div>
      </section> */}



      {/* Committee Section */}
      <section className="events-section">
        <div className="events-wrapper">

          <h2 className="section-title" style={{ fontSize: '32px', textTransform: 'uppercase', textAlign: 'center' }}>EVENTS COMMITTEE</h2>
          <div style={{ width: '60px', height: '4px', background: '#f4ececff', margin: '10px auto 20px', borderRadius: '2px' }}></div>

          <div className="events-grid">

            {/* Card 1 */}
            <div className="event-card">
              <img
                src="https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png"
                alt="Executive Committee 2023-25"
                className="card-image"
                onClick={() => setSelectedImg("https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png")}
                style={{ cursor: 'pointer' }}
              />
              <h3 className="card-title">Executive Committee 2023-25</h3>
            </div>

            {/* Card 2 */}
            <div className="event-card">
              <img
                src="https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png"
                alt="Our Team"
                className="card-image"
                onClick={() => setSelectedImg("https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png")}
                style={{ cursor: 'pointer' }}
              />
              <h3 className="card-title">Our Team</h3>
            </div>

            {/* Card 3 */}
            <div className="event-card">
              <img
                src="https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png"
                alt="Team Spirit"
                className="card-image"
                onClick={() => setSelectedImg("https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png")}
                style={{ cursor: 'pointer' }}
              />
              <h3 className="card-title">Team Spirit</h3>
            </div>

            {/* Card 4 */}
            <div className="event-card">
              <img
                src="https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png"
                alt="Executive Committee 2022"
                className="card-image"
                onClick={() => setSelectedImg("https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png")}
                style={{ cursor: 'pointer' }}
              />
              <h3 className="card-title">Executive Committee 2022</h3>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div className="about-lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <div className="about-lightbox-container">
            <button className="about-lightbox-close" onClick={() => setSelectedImg(null)}>&times;</button>
            <img src={selectedImg} alt="Enlarged view" className="about-lightbox-img" />
          </div>
        </div>
      )}

    </>
  );
};


export default About;
