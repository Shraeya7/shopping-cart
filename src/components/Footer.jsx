// Footer.jsx

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
      <div className="info">
        <p>Follow us on social media for updates and promotions!</p>
        <p>Contact us: support@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
