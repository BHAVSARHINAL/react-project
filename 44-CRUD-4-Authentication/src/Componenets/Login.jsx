import React, { useState } from "react";
import axios from "axios";
import { replace, useNavigate } from "react-router-dom";

function Login() {
  // State variables for email, password, and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Navigation hook
  const navigate = useNavigate();

  // Handle login button click
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Post request to login API
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      });

      console.log(response, "REPO");

      if (response.data.jwtToken) {
        const token = response.data.jwtToken;
        localStorage.setItem("authToken", token);

        console.log("Login successful", token);
        navigate("/home", { replace: true });
      } else {
        alert(response.data);
        setEmail("");
        setPassword("");
      }

      // Get token from response and store it in localStorage

      // Redirect to the registration page after successful login
      // navigate("/home");
    } catch (err) {
      // Display an error message for incorrect credentials
      // setError("Please check your credentials.");
      // console.error("Login error", err);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form
        style={{ border: "2px solid black", padding: "20px" }}
        onSubmit={handleLogin}
      >
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </form>
    </div>
  );
}

export default Login;
