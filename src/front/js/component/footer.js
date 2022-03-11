import React, { Component } from "react";
import logo from "../../img/Logo.png";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="container-footer">
      <div className="row">
        <div className="col">
          <img src={logo} />
          <h1>Find Us:</h1>
          <div className="media">
            <a href="">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="socialmedia"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="socialmedia"
              />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} className="socialmedia" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTwitterSquare} className="socialmedia" />
            </a>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
