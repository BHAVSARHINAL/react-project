import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const saveData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/saveuser", {
        name: name,
        email: email,
        password: password,
        username: username,
        contact: contact,
      })
      .then((response) => {
        console.log(response);
        alert("record insterd..");
        navigate("/login");
      });
  };

  return (
    <div>
      <h2>Registration form</h2>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br> <br></br>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br> <br></br>
        <label>Contact: </label>
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <br></br> <br></br>
        <label>Password: </label>
        <input
          type="text"
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br> <br></br>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br> <br></br>
        <button onClick={saveData}>Register</button>
      </form>
    </div>
  );
}

export default Registration;
