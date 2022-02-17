import React, { Component } from "react";
import logo from "../../img/logo.png"
import "../../styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagramSquare, faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container-footer">
				<div className="row">
					<div className="col">
					
					<img src={logo}/>
					<h1>Find Us:</h1>
					<div>
					<FontAwesomeIcon icon="fa-brands fa-instagram-square" className="icon"/>
					<FontAwesomeIcon icon="fa-brands fa-twitter-square" className="icon"/>
					<FontAwesomeIcon icon="fa-brands fa-facebook-square" className="icon"/>
					<FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon"/>
						
					</div>
					</div>
					<div className="col">
						<ul>
							<li>Contact Us</li>
							<li>About Us</li>
							<li>Career</li>
							<li>Download App</li>
							<li>Help and Support</li>
							<li>Blog</li>
							<li>Forum</li>
						</ul>
					</div>
					<div className="col">
						<ul>
							<li>Terms</li>
							<li>Privacy Policy</li>
							<li>Cookies Settings</li>
							<li>Site Map</li>
							<li>Accessibility</li>
							
						</ul>
					</div>
				</div>
		</div>
	</footer>
);
