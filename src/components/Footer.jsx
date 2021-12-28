import React, { useState, useEffect } from "react";
import "./Footer.css";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://www.facebook.com/NetflixIN/"
            className="footer-social-links"
          >
            <FaFacebookF className="footer-social-links" />
          </a>
          <a
            href="https://www.instagram.com/Netflix_IN/"
            className="footer-social-links"
          >
            <FaInstagram className="footer-social-links" />
          </a>
          <a
            href="https://twitter.com/netflixindia"
            className="footer-social-links"
          >
            <FaTwitter className="footer-social-links" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
            className="footer-social-links"
          >
            <FaYoutube className="footer-social-links" />
          </a>
        </div>

        <div className="footer-links">
          <ul className="footer-links-ul">
            <li className="footer-links-li">
              <a href="">Audio Description</a>
            </li>
            <li className="footer-links-li">
              <a href="">Help Center</a>
            </li>
            <li className="footer-links-li">
              <a href="">Gift Cards</a>
            </li>
            <li className="footer-links-li">
              <a href="">Media Center</a>
            </li>
            <li className="footer-links-li">
              <a href="">Investor Relations</a>
            </li>
            <li className="footer-links-li">
              <a href="">Jobs</a>
            </li>
            <li className="footer-links-li">
              <a href="">Terms of Use</a>
            </li>
            <li className="footer-links-li">
              <a href="">Privacy</a>
            </li>
            <li className="footer-links-li">
              <a href="">Legal Notices</a>
            </li>
            <li className="footer-links-li">
              <a href="">Cookie Preferences</a>
            </li>
            <li className="footer-links-li">
              <a href="">Corporate Information</a>
            </li>
            <li className="footer-links-li">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <button className="footer-service-code-button"> Service Code</button>
        </div>
        <div className="footer-copyright">
          © 1997-2021 Netflix Clone, Inc. {"{xxxx-xxxx-xxxx-xxx-xxxxxxxx}"}
        </div>
      </div>
    </div>
  );
}
