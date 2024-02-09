import React from 'react';
import '../styles/Footer.css';
import SamisLogo from '../assets/company_logo.png';

const Footer = () => {
  return (
    <>
    <div className="footer-section">
            <div className="footer-container">
                <div className="footer-info">
                    <div className="footer-info-top">
                        <img src={SamisLogo} alt="Samis_logo"/>
                        <p>We develop software to aid schools in managing thir academics and financial DTE easily and more efficiently</p>
                    </div>
                    <div className="footer-social-media-icons">
                        <div>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                        <div>
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </div>
                        <div>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-info-top"><h3>Our Services</h3></div>
                    <div className="footer-website-links">
                        <li>School Management</li>
                        <li>Examination</li>
                        <li>Academic Reports</li>
                        <li>Finance Module</li>
                        <li>IPSAS Reports</li>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-info-top"><h3>Pages</h3></div>
                    <div className="footer-website-links">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Mobile App</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-section">
            <div className="copyright-container">
                <div className="copyright-info">
                    <p>&copy; <span id="date"></span> SAMIS Software Limited. Rights Reserved.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;