import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import insta_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatspp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>Shooper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
            <img src={insta_icon} alt="insta-icon" />
        </div>
        <div className="footer-icon-container">
            <img src={pintester_icon} alt="insta-icon" />
        </div>
        <div className="footer-icon-container">
            <img src={whatspp_icon} alt="insta-icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
