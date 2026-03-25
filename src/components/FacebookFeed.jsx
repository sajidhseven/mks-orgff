import React, { useEffect } from "react";
import "./FacebookFeed.css";

const FacebookFeed = () => {

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
        
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }

        // Add Elfsight script for Instagram feed
        if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
            const script = document.createElement("script");
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section className="social-media-section">
            <div className="container">
                <div className="social-media-header">
                    <h2 className="title">Social Media Feeds</h2>
                    <div className="facebook-divider"></div>
                    <p className="subtitle">
                        Stay connected with Melbourne Kannada Sangha! Explore our latest events, community updates, and vibrant moments shared on our Facebook and Instagram pages.
                    </p>
                </div>

                <div className="social-feeds-grid">
                    {/* FACEBOOK FEED */}
                    <div className="feed-column">
                        <h3 className="feed-title"><i className="fab fa-facebook" style={{ color: '#1877F2', marginRight: '8px' }}></i> Facebook</h3>
                        <div className="facebook-feed-wrapper">
                            <div
                                className="fb-page"
                                data-href="https://www.facebook.com/melbournekannadasangha"
                                data-tabs="timeline"
                                data-width="500"
                                data-height="600"
                                data-small-header="false"
                                data-adapt-container-width="true"
                                data-hide-cover="false"
                                data-show-facepile="true"
                            >
                                <blockquote cite="https://www.facebook.com/melbournekannadasangha" className="fb-xfbml-parse-ignore">
                                    <a href="https://www.facebook.com/melbournekannadasangha">Melbourne Kannada Sangha</a>
                                </blockquote>
                            </div>
                        </div>

                        <div className="visit-btn-container">
                            <a
                                href="https://www.facebook.com/melbournekannadasangha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-btn facebook"
                            >
                                <i className="fab fa-facebook-f"></i> Visit Facebook
                            </a>
                        </div>
                    </div>

                    {/* INSTAGRAM FEED */}
                    <div className="feed-column">
                        <h3 className="feed-title"><i className="fab fa-instagram" style={{ color: '#E1306C', marginRight: '8px' }}></i> Instagram</h3>
                        <div className="instagram-feed-wrapper">
                            {/* Elfsight Instagram Feed | MKS */}
                            <div className="elfsight-app-7b894800-0915-43cc-b8a3-b58d8275fcc2" data-elfsight-app-lazy style={{ width: '100%' }}></div>
                        </div>

                        <div className="visit-btn-container">
                            <a
                                href="https://www.instagram.com/melnudi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-btn instagram"
                            >
                                <i className="fab fa-instagram"></i> Visit Instagram
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FacebookFeed;