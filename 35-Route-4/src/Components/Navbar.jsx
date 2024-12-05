// import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Lecture</NavLink>
        </li>
        <li>
          <NavLink to="/reports">Reports</NavLink>
        </li>
        <li>
          <NavLink to="/test">Test</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
