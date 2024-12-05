// import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
  // const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const saveData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/create", {
        name: name,
        email: email,
        password: password,
        contact: contact,
      })
      .then((res) => {
        console.log(res);
        alert("You have been register sucessfuly..");
        navigate("/read");
      });
  };
  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>

        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>

        <label>Password : </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>

        <label>Contact : </label>
        <input
          type="number"
          name="contact"
          placeholder="Enter your contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <button onClick={saveData}>Register</button>
      </form>
    </div>
  );
}

export default Create;
