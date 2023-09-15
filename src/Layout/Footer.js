import React from "react";
import Logo from "./../Pictures/TongariroLogo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (

    <div className="footer">
      <div className="cont-columns">
        <div className="footer-col">
          <h4>GENERAL</h4>
          <ul>
          <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/Movies">Movies</a>
            </li>
            <li>
              <a href="/Help">FAQs</a>
            </li>
            <li>
              <a href="/contact">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>REWARDS</h4>
          <ul>
            <li>Sign Up</li>
            <li>Member's Benefits</li>
            <li>Download App</li>
            <li>Requirements</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>WHAT'S ON</h4>
          <ul>
            <li>Monthly Special</li>
            <li>Now Showing</li>
            <li>Next Attraction</li>
            <li>Moriarty Café</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-f App-link"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <br />
            <br />
            <br />
            <small className="text-center mt-5" style={{ color: '#75DDDD' }}>
          <a href="/" >
        <img src={Logo} alt="" width="100px" /> 
            </a> 
          <br /> Made with <i className="fa fa-heart-o" style={{ color: '#d1de4c' }}></i>by Jolly L. Cusi
        </small>
          </div>
        </div>
      </div>
      
    </div>

  );
};

export default Footer;
