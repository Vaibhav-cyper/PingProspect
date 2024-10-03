import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to manage the toggle of mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://ping-prospect.vercel.app">
          <img src={('./Pingprospect_raw.png')} alt="Logo" />
        </a>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger-icon" onClick={toggleMobileMenu}>

{/*         <a href="https://github.com/Vaibhav-cyper/Ping-Prospect_exefiloe/releases/download/v1.0.0/gui.exe"> */}
              <button className="btn-download">Download</button>
{/*         </a> */}

      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li ><a href="/">Home</a></li>
        <li ><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#support">Support</a></li>
        <li>
{/*           <a href="https://github.com/Vaibhav-cyper/Ping-Prospect_exefiloe/releases/download/v1.0.0/gui.exe"> */}
              <button className="btn-download">Download</button>
{/*         </a> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

