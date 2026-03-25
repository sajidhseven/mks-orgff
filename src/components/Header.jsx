import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const toggleDropdown = (menu, e) => {
    if (e) e.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="mks-header" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <div className="mks-container">

        {/* LOGO */}
        <div className="mks-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/MKS-LOGO.png" alt="Melbourne Kannada Sangha" />
          </Link>
        </div>

        {/* CENTER */}
        <div className="mks-center">
          {/* <h1 className="mks-title">Melbourne Kannada Sangha</h1> */}

          <nav className={`mks-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>

              {/* ABOUT */}
              <li
                className="has-dropdown"
                onMouseEnter={() => window.innerWidth > 1080 && setActiveDropdown("about")}
                onMouseLeave={() => window.innerWidth > 1080 && setActiveDropdown(null)}
              >
                <div className="nav-link-wrapper">
                  <Link to="/about" className="mks-nav-link" onClick={closeMenu}>
                    About
                  </Link>
                  <i
                    className={`fas fa-chevron-down ${activeDropdown === "about" ? "rotate" : ""}`}
                    onClick={(e) => toggleDropdown("about", e)}
                  ></i>
                </div>

                <div className={`mks-dropdown ${activeDropdown === "about" ? "show" : ""}`}>
                  <Link to="/comittee" className="mks-drop-item" onClick={closeMenu}>
                    Committee Members
                  </Link>
                </div>
              </li>

              {/* EVENTS */}
              <li><Link to="/events" onClick={closeMenu}>Events</Link></li>

              {/* FACEBOOK FEED */}
              <li><Link to="/facebook-feed" onClick={closeMenu}>Social Media Feed</Link></li>

              {/* KANNADA BHAVANA */}
              <li
                className="has-dropdown"
                onMouseEnter={() => window.innerWidth > 1080 && setActiveDropdown("kannada_bhavana")}
                onMouseLeave={() => window.innerWidth > 1080 && setActiveDropdown(null)}
              >
                <div className="nav-link-wrapper">
                  <span className="mks-nav-link no-link" onClick={() => window.innerWidth <= 1080 && toggleDropdown("kannada_bhavana")}>
                    Kannada Bhavana
                  </span>
                  <i
                    className={`fas fa-chevron-down ${activeDropdown === "kannada_bhavana" ? "rotate" : ""}`}
                    onClick={(e) => toggleDropdown("kannada_bhavana", e)}
                  ></i>
                </div>

                <div className={`mks-dropdown ${activeDropdown === "kannada_bhavana" ? "show" : ""}`}>
                  <Link to="/about-kannada-bhavana" className="mks-drop-item" onClick={closeMenu}>
                    About Kannada Bhavana
                  </Link>
                  {/* <Link to="/donate-kannada-bhavana" className="mks-drop-item" onClick={closeMenu}>
                    Donate to Kannada Bhavana
                  </Link> */}
                </div>
              </li>

              {/* LIBRARY */}
              <li
                className="has-dropdown"
                onMouseEnter={() => window.innerWidth > 1080 && setActiveDropdown("library")}
                onMouseLeave={() => window.innerWidth > 1080 && setActiveDropdown(null)}
              >
                <div className="nav-link-wrapper">
                  <span className="mks-nav-link no-link" onClick={() => window.innerWidth <= 1080 && toggleDropdown("library")}>
                    Library
                  </span>
                  <i
                    className={`fas fa-chevron-down ${activeDropdown === "library" ? "rotate" : ""}`}
                    onClick={(e) => toggleDropdown("library", e)}
                  ></i>
                </div>

                <div className={`mks-dropdown ${activeDropdown === "library" ? "show" : ""}`}>
                  <Link to="/library" className="mks-drop-item" onClick={closeMenu}>
                    Library
                  </Link>
                  <Link to="/book-reading-club" className="mks-drop-item" onClick={closeMenu}>
                    Book Reading Club
                  </Link>
                  <Link to="/melnudi" className="mks-drop-item" onClick={closeMenu}>
                    Melnudi
                  </Link>
                </div>
              </li>

              {/* MEMBERSHIPS */}
              <li
                className="has-dropdown"
                onMouseEnter={() => window.innerWidth > 1080 && setActiveDropdown("memberships")}
                onMouseLeave={() => window.innerWidth > 1080 && setActiveDropdown(null)}
              >
                <div className="nav-link-wrapper">
                  <span className="mks-nav-link no-link" onClick={() => window.innerWidth <= 1080 && toggleDropdown("memberships")}>
                    Memberships
                  </span>
                  <i
                    className={`fas fa-chevron-down ${activeDropdown === "memberships" ? "rotate" : ""}`}
                    onClick={(e) => toggleDropdown("memberships", e)}
                  ></i>
                </div>

                <div className={`mks-dropdown ${activeDropdown === "memberships" ? "show" : ""}`}>
                  <Link to="/annual-membership" className="mks-drop-item" onClick={closeMenu}>
                    Annual Membership Form
                  </Link>
                  <Link to="/life-membership" className="mks-drop-item" onClick={closeMenu}>
                    Life Membership Form
                  </Link>
                </div>
              </li>

              {/* GALLERY */}
              <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>

              {/* SPONSORS */}
              <li><Link to="/sponsors" onClick={closeMenu}>Sponsors</Link></li>

              {/* KANNADA CONTACT DETAILS */}
              <li><Link to="/kannada-contact-details" onClick={closeMenu}>Kannada Contact Details</Link></li>

              {/* CONTACT */}
              <li className="mks-contact-li">
                <Link to="/contact" className="contact-btn" onClick={closeMenu}>
                  Contact Us <i className="fas fa-chevron-right" style={{ marginLeft: "5px", fontSize: "11px" }}></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* RIGHT SECTION: HAMBURGER */}
        <div className="mks-right">
          <div
            className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
