// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { useParam } from "react-router-dom";
import { useParams, Link, useNavigate } from "react-router-dom";
function Update() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigat = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/api/users/" + id).then((res) => {
      setData(res.data);
    });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/users/update/" + id, data)
      .then((Res) => {
        alert("data updated sucessfully");
        console.log(Res);
        navigat("/read");
      });
  }
  return (
    <div
      style={{
        width: "480px",
        margin: "170px",
        marginLeft: "600px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Edit form</h1>

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
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={data.name}
            // onChange={(e) => setData({ ...data, name: e.target.value })}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your password"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
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
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <br></br>

        <div className="form-group">
          <label>Contact</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your contact"
            value={data.contact}
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
        </div>
        <br></br>

        <button
          type="submit"
          className="btn btn-dark"
          style={{ textAlign: "center", marginLeft: "30%" }}
        >
          Update
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

export default Update;
