// import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";
import "./Navbar.css";
function Navbar() {
  //  className="navbar navbar-dark bg-dark"
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link
          to="/"
          style={{
            marginLeft: "40px",
            fontSize: "40px",
            textDecoration: "none",
            color: "rgb(96, 219, 232)",
          }}
          className="name"
        >
          Website
        </Link>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{
            marginLeft: "55%",
            padding: "20px",
          }}
        >
          <ul className="navbar-nav">
            <li>
              <Link to="/service" className="name">
                Service
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="name">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="name">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="name">
                Registration
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact" className="name">
                Contcat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
