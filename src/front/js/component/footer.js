import React, { Component } from "react";
import logo from "../../img/logo.png"
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container-footer">
				<div className="row">
					<div className="col">
					
					<img src={logo}/>
					<h1>Find Us:</h1>
					<div>
						<i>Instagram</i>
						<i>Twitter</i>
						<i>Facebook</i>
						<i>LinkedIn</i>
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
