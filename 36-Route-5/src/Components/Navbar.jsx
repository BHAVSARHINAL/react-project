// import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <h1>Assets : </h1>
        <ul>
          <li>
            <NavLink to="/laptop">laptop</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/computer">Computer</NavLink>
          </li>
          <li>
            <NavLink to="/phone">Phone</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
