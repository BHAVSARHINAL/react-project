// import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const header = { "Access-Control-Allow-Origin": "*" };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Click");
    axios
      .post("http://localhost:8080/api/users/create", {
        name: name,
        email: email,
        password: password,
        contact: contact,
        header,
      })
      .then((response) => {
        console.log(response);
        navigate("/read");
      });
  }
  return (
    <div>
      <form>
        <h2>Registration Form</h2>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br> <br></br>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <label>Contact : </label>
        <input
          type="text"
          name="contact"
          placeholder="Enter your contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Create;
