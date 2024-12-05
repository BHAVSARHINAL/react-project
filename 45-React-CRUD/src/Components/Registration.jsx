// import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Registration() {
  let RegistrationImage = {
    marginLeft: "0",
    marginTop: "0",
    height: "88vh",
    width: "100%",

    backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL_sC17xW6uOW2cFIcJLSz2t-hYEYw8rJ5w&s")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContect: "center",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/saveuser", {
        name: name,
        email: email,
        username: username,
        password: password,
        contact: contact,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
        toast.success(`${name} you are registerd successfull!!`);
      });
  };

  return (
    <div style={RegistrationImage}>
      <h1
        className="data"
        style={{
          textAlign: "center",
          marginTop: "25px",
          color: "#212121",
          marginLeft: "10%",
        }}
      >
        Registration Form
      </h1>

      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        ></input>
        <br></br>

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        ></input>
        <br></br>

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        ></input>

        <br></br>
        <label>Contact:</label>
        <input
          type="number"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter your contact"
        ></input>
        <br></br>

        <button
          style={{
            marginLeft: "100px",
            padding: "8px",
            borderRadius: "5px",
            width: "50%",
            border: "2px solid gray",
            marginTop: "40px",
          }}
        >
          Register
        </button>
        <p
          style={{
            color: "white",
            marginLeft: "80px",
            marginTop: "20px",
            textDecoration: "none",
          }}
        >
          Already register?
          <Link to="/Login" className="link-tag">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;
