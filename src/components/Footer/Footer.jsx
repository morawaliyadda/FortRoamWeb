import React from 'react';
import './Footer.css';
import FooterVideo from "../../assets/footer.mp4";

const Footer = () => {
    return (
        <footer className="footer">
            <video className="video-bg" autoPlay loop muted>
                <source src={FooterVideo} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="container">
                <div className="rows">
                    <div className="column">
                        <h5>About FortRoam</h5>
                        <h6>FortRoam is your ultimate guide to exploring Galle Fort and its surrounding attractions. </h6>
                    </div>
                    <div className="column">
                        <h5>Explore Galle Fort</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/favourites">Favourites</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/profile">Profile</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5>Contact Us</h5>
                        <address>
                            <strong>FortRoam</strong><br />
                            Galle Fort, Sri Lanka<br />
                            Phone: +11-2222-3333<br />
                            Email: info@fortroam.com
                        </address>
                    </div>
                </div>
                <div className="rows">
                    <div className="text-center">
                        <p>&copy; 2024 FortRoam. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
