import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Intro from "./components/Intro";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Comittee from "./components/Comittee";
import AboutKannadaBhavana from "./components/AboutKannadaBhavana";
import Library from "./components/Library";
import BookReadingClub from "./components/BookReadingClub";
import Melnudi from "./components/Melnudi";
import Contact from "./components/Contact";
import FacebookFeed from "./components/FacebookFeed";
// import DonateUs from "./components/DonateUs";
import AnnualMembershipForm from "./components/AnnualMembershipForm";
import LifeMembershipForm from "./components/LifeMembershipForm";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import OutdoorUgadiGallery2025 from "./components/OutdoorUgadiGallery2025";
import UgadiBhavanaGallery2025 from "./components/UgadiBhavanaGallery2025";
import Disclaimer from "./components/Disclaimer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import KannadaRajyotsavaGallery2025 from "./components/KannadaRajyotsavaGallery2025";
import TSNagabharanaGallery from "./components/TSNagabharanaGallery";
import BadmintonGallery2025 from "./components/BadmintonGallery2025";
import UgadiCelebrationsGallery from "./components/UgadiCelebrationsGallery";
import ScrollToTop from "./components/ScrollToTop";
import KannadaContactDetails from "./components/KannadaContactDetails";


import "./mksStyle.css";

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comittee" element={<Comittee />} />
        <Route path="/about-kannada-bhavana" element={<AboutKannadaBhavana />} />
        <Route path="/library" element={<Library />} />
        <Route path="/book-reading-club" element={<BookReadingClub />} />
        <Route path="/melnudi" element={<Melnudi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kannada-contact-details" element={<KannadaContactDetails />} />
        <Route path="/facebook-feed" element={<FacebookFeed />} />
        {/* <Route path="/donate-kannada-bhavana" element={<DonateUs />} /> */}
        <Route path="/annual-membership" element={<AnnualMembershipForm />} />
        <Route path="/life-membership" element={<LifeMembershipForm />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/outdoor-ugadi-celebrations-gallery-2025" element={<OutdoorUgadiGallery2025 />} />
        <Route path="/ugadi-event-kannada-bhavana-gallery-2025" element={<UgadiBhavanaGallery2025 />} />
        <Route path="/kannada-rajyotsava-gallery-2025" element={<KannadaRajyotsavaGallery2025 />} />
        <Route path="/ts-nagabharana-meet-and-greet-gallery" element={<TSNagabharanaGallery />} />
        <Route path="/badminton-tournament-gallery-2025" element={<BadmintonGallery2025 />} />
        <Route path="/mks-ugadi-celebrations-gallery" element={<UgadiCelebrationsGallery />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
