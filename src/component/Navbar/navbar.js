import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function () {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tour Company"></img>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
