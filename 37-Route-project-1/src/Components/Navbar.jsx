// import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <Link className="title" to="/">
          Website
        </Link>
        <ul className="items">
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
