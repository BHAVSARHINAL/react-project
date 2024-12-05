// import React from "react";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about");
  }

  return (
    <div>
      <button onClick={handleClick}>move to about page</button>
      <h1>This is home page...</h1>
    </div>
  );
}

export default Home;
