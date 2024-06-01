import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Plant Shop</h3>
                    <p>Your go-to place for all your plant needs. Bringing nature closer to you.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@plantshop.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br/>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br/>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Plant Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
