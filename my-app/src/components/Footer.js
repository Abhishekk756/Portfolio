import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">
          <div className="location">
            <FaHome size={20} className="footer-icon" />
            <div>
              <p>B301, Z1 Apartments</p>
              <p>Bhubaneswar</p>
            </div>
          </div>

          <div className="location">
            <FaPhone size={20} className="footer-icon" />
            <p>7852966344</p>
          </div>

          <div className="location">
            <FaMailBulk size={20} className="footer-icon" />
            <p>abhishekkn2006@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About myself</h4>
          <p>
            I work with React, Node.js, Express, SQL, C, and Python to create clean
            and scalable solutions. Currently strengthening my problem-solving
            skills through Data Structures and Algorithms while improving backend
            and system design. Aspiring software engineer.
          </p>

          <div className="social">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;