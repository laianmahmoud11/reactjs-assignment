import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets//images/logo1.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="logo" className="logo" />
        <p className="footer-description">
          Fickle Flight is your one-stop travel portal. We offer hassle-free
          flight and hotel bookings. We also have all your flight needs in our
          online shop.
        </p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <table className="footer-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Support</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>About</td>
              <td>Account</td>
              <td>Covid Advisory</td>
            </tr>
            <tr>
              <td>News</td>
              <td>Support Center</td>
              <td>Airline Fees</td>
            </tr>
            <tr>
              <td>Careers</td>
              <td>FAQ</td>
              <td>Tips</td>
            </tr>
            <tr>
              <td>How we work</td>
              <td>Accessibility</td>
              <td>Quarantine Rules</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}
