import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <img src={Logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
          <li>Menu</li>
          <li>
            <Link to="/booking">Reservation</Link>
          </li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
