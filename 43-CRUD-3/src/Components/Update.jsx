// import React from 'react'
import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/users/" + id).then((res) => {
      setData(res.data);
    });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/users/update/" + id, data)
      // .then((Res) => {
      //   //
      //   navigate("/read");
      //   console.log(Res);
      .then((Res) => {
        alert(`${data.name} your data has been updated sucessfully`);
        console.log(Res);
        navigate("/read");
      });
  }
  return (
    <div>
      <h2>Edit Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br></br>
        <br></br>
        <label>Contact : </label>
        <input
          type="number"
          name="contact"
          placeholder="Enter your contact"
          value={data.contact}
          onChange={(e) => setData({ ...data, contact: e.target.value })}
        />
        <br></br>
        <br></br>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
