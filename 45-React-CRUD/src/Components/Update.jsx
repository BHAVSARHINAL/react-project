// import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function Update() {
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
  const [data, setData] = useState([]);
  const { userid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/user/get/" + userid).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [userid]);

  function updateData(e) {
    e.preventDefault();
    axios
      .put("http://localhost:8080/user/updateuser/" + userid, data)
      .then((res) => {
        console.log(res);
        navigate("/read");
      });
  }

  return (
    <div>
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
          Update Form
        </h1>

        <form onSubmit={updateData}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            // value={data.name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            // onChange={(e) => setData({ ...data, name: e.target.value })}
          ></input>
          <br></br>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            readOnly
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            // onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Enter your password"
          ></input>
          <br></br>

          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={data.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            placeholder="Enter your username"
          ></input>

          <br></br>
          <label>Contact:</label>
          <input
            type="number"
            name="contact"
            value={data.contact}
            // onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact"
            onChange={(e) => setData({ ...data, contact: e.target.value })}
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
            Update
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
            {/* <Link to="/Login" className="link-tag">
              Sign up
            </Link> */}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Update;
