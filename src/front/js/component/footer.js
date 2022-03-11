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
          <h2>Find Us:</h2>
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
            <li className="lili">Contact Us</li>
            <li className="lili">About Us</li>
            <li className="lili">Career</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="lili">Terms</li>
            <li className="lili">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
