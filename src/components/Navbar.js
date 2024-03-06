import React from 'react';
import '../styles/Navbar.css';
import CompanyLogo from '../assets/company_logo.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="top-navbar">
            <div className="top-navbar-content">
                <div className="leftside-content">
                    <div className="span-left-info">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>+254711082779</span>
                    </div>
                    <hr/>
                    <div className="span-right-info">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>samissystems@gmail.com</span>
                    </div>
                </div>
                <div className="rightside-content">
                    <div className="social-media-icons">
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
            </div>
        </div>
        <div className="main-navbar">
            <nav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={CompanyLogo} alt="Samis Logo" width="135" height="44"/>
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                                    <li><a className="dropdown-item" href="#services">School Management</a></li>
                                    <li><a className="dropdown-item" href="#services">Examination</a></li>
                                    <li><a className="dropdown-item" href="#services">Academic Reports</a></li>
                                    <li><a className="dropdown-item" href="#services">Finance Module</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#!">SAMIS Website & Portal</a></li>
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mobile App</a>
                                <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="servicesDropdown">
                                    <li><a className="dropdown-item" href="#services">SAMIS Mobile App</a></li>
                                    <li><a className="dropdown-item" href="#services">SAMIS SMS Module</a></li>
                                    <li><a className="dropdown-item" href="#services">IPSAS Reports</a></li>
                                    <li><a className="dropdown-item" href="#services">Analysis</a></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="quote-btn">Get Quote</button>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar;