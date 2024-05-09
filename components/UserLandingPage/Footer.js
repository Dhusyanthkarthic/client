import React from "react";
import Logo from "../../Assets/Logo.jpeg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Share</span>
          <span>Analysis</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>Aidnet@business.com</span>
          <span>Aidnet1@business.com</span>
          <span>Aidnet2@business.com</span>
        </div>
        {/* <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
