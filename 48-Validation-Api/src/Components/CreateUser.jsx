import React from "react";
import { useState } from "react";
import axios from "axios";
function CreateUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [mobile, setMobile] = useState("");

  const saveUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/create", {
        name: name,
        password: password,
        username: username,
        email: email,
        gender: gender,
        date_of_birth: date_of_birth,
        mobile: mobile,
      })
      .then((res) => {
        console.log("save data");
        console.log(res);
        alert("record inserted");
      });
  };

  return (
    <div>
      <form onSubmit={saveUser}>
        <h2>Registration Form</h2>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br> <br></br>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Contact : </label>
        <input
          type="text"
          name="contact"
          placeholder="Enter your contact"
          onChange={(e) => setMobile(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Username : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br> <br></br>
        <label>Date of birth : </label>
        <input
          type="date"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <br></br> <br></br>
        <label>gender : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setGender(e.target.value)}
        />
        <br></br> <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
