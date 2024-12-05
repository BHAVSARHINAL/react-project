// import React from 'react'

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function Update() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [contact, setContact] = useState("");
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/" + id)
      // .get(`${"http://localhost:8080/api/users"}/${id}`)
      .then((response) => setData(response.data));
  }, [id]);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8080/api/users/update/" + id, data)
      .then((res) => {
        alert("data upated sucessfully");
        console.log(res);

        navigate("/read");
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Form</h2>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <br></br> <br></br>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          // onChange={handleChange}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          // onChange={handleChange}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Contact : </label>
        <input
          type="text"
          name="contact"
          placeholder="Enter your contact"
          // onChange={handleChange}
          value={data.contact}
          onChange={(e) => setData({ ...data, contact: e.target.value })}
        />
        <br></br>
        <br></br>
        <button>Update</button>
      </form>
    </div>
  );
}

export default Update;
