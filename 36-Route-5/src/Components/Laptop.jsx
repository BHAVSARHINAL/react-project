// import React from 'react'

// import { useTransition } from "react";
import { useNavigate } from "react-router-dom";
function Laptop() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/phone");
  }
  return (
    <div>
      <h1>Laptop page</h1>
      <button onClick={handleClick}>Move to phone page</button>
    </div>
  );
}

export default Laptop;
