// import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [email, setEmai] = useState("");
  const [password, setPasword] = useState("");
  const [contact, setContact] = useState("");

  const navigation = useNavigate();
  function insertData(e) {
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
        alert("You are register sucessfully..");
        navigation("/read");
      });

    // setName("");
    // setEmai("");
    // setPasword("");
    // setContact("");
  }

  return (
    <div
      style={{
        width: "480px",
        margin: "170px",
        marginLeft: "600px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Registration form</h1>

      <form
        style={{
          padding: "40px",
          width: "450px",
          fontSize: "20px",
          border: "1px solid black",
          backgroundColor: "pink",
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        <div className="form-group">
          <label>Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e) => {
              setEmai(e.target.value);
            }}
          />
        </div>
        <br></br>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setPasword(e.target.value);
            }}
          />
        </div>
        <br></br>

        <div className="form-group">
          <label>Contact</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your contact"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        <br></br>

        <button
          type="submit"
          className="btn btn-dark"
          style={{ textAlign: "center", marginLeft: "30%" }}
          onClick={insertData}
        >
          Submit
        </button>
        <Link to="/read">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ textAlign: "center", marginLeft: "5%" }}
          >
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Create;
