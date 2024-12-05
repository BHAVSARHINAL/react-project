// import React from 'react'
import { useState } from "react";
import "./Navbar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  let loginImage = {
    marginLeft: "0",
    marginTop: "0",
    height: "88vh",
    width: "100%",

    backgroundImage:
      'url("https://imgcdn.stablediffusionweb.com/2024/5/7/76668f77-df48-4d04-a91e-6feeb073bcd5.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContect: "center",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      });

      console.log(response, "Ress");

      if (response.data.jwtToken) {
        const token = response.data.jwtToken;
        localStorage.setItem("authToken", token);
        console.log("Login sucessfull", token);
        // Toast.success("Login sucessfully");
        toast.success("Welcome to the Home Page");
        navigate("/read", { replace: true });
      } else {
        toast.error("Username and password are incorrect!..Please try again.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Please check your credentials and try again.");
      setEmail("");
      setPassword("");
    }
  };
  // const handleButtonClick = () => {

  // };
  return (
    <div style={loginImage}>
      <h1
        className="data"
        style={{ textAlign: "center", marginTop: "25px", color: "#212121" }}
      >
        Login here
      </h1>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br> <label>Email:</label>
          <br></br>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></input>
          <br></br> <label>Password:</label>
          <br></br>
        </div>
        <div>
          <button
            style={{
              marginLeft: "100px",
              padding: "8px",
              borderRadius: "5px",
              width: "50%",
            }}
            type="submit"
          >
            Login
          </button>
        </div>
        <p
          style={{
            color: "white",
            marginLeft: "80px",
            marginTop: "20px",
            textDecoration: "none",
          }}
        >
          Not a member?
          <Link to="/registration" className="link-tag">
            Sign up
          </Link>
        </p>
        {/* <button
          style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px" }}
        >
          Sign up
        </button> */}
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Login;
