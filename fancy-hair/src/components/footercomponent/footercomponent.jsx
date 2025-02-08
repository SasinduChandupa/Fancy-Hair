import React from "react";
import './FooterComponent.css'; // Import the CSS file

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Fancy Hair</h3>
                    <p className="footer-description">
                        Experience the ultimate in hair care and styling at our luxurious salon.<br/>
                        <img src="/logo.png" alt="logo" />
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Contact Us</h4>
                    <ul className="footer-contact">
                        <li>📞 +1 234 567 890</li>
                        <li>📧 info@fancyhair.com</li>
                        <li>📍 123 Salon Street, Beauty City</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Fancy Hair. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;