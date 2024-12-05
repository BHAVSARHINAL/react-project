// import React from 'react'

import { useNavigate } from "react-router-dom"

function About() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/dashboard")
  }
  return (
    <div>
        <h1>This is about page...</h1>
        <button onClick={handleClick}>Move to dashboard page</button>
    </div>
  )
}

export default About
