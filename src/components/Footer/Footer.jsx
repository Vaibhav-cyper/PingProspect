import React from 'react';
import './Footer.css';
import { NavLink,Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2024 Ping Prospect. All rights reserved.</p>
        <nav className="footer-links">
          <NavLink to="privacy-policy" className="NavLink">Privacy Policy</NavLink>
          <NavLink to="terms-of-service" className="NavLink">Terms of Service</NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
