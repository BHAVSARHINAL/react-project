// import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
