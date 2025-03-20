import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets//images/logo.svg";
import avatar from "../assets/images/avatarPic.png";

export default function Header() {
  return (
    <header className="navbar-header">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-right">
          <ul className="menu">
            <li>
              <a href="#explore">Explore</a>
            </li>
            <li>
              <a href="#search">Search</a>
            </li>
            <li>
              <a href="#hotels">Hotels</a>
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
          </ul>
          <ul className="notification-profile-section">
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li>
              <img src={avatar} alt="avatar" className="avatar-pic" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
