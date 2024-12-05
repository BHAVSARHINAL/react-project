// import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Navbar.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  //   let token = localStorage.getItem("authToken");
  //   // console.log(jwtToken, "tokennn");
  //   console.log(token);
  //   console.log("token................", localStorage.getItem("authToken"));

  //   function getData() {
  //     if (token) {
  //       axios
  //         .get("http://localhost:8080/auth/getalluser", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         })
  //         .then((response) => {
  //           setData(response.data);
  //           // setData(response.data);
  //         });
  //     }
  //   }

  const getData = () => {
    const token = localStorage.getItem("authToken");
    console.log("token :", token);

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log("profile data");
    if (token) {
      axios
        .get("http://localhost:8080/auth/getalluser", header)
        .then((response) => {
          console.log("profile data", response.data);
          setData(response.data);
        });
    } else {
      console.log("invalid data...");
    }
    // .catch((err) => {
    //   console.log("error ocuur", err);
    // });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("authTOken")) {
      // console.log("not a token");
      navigate("/login");
    }
  }, []);
  // const handleLogout = () => {
  //   localStorage.removeItem("loggedin");
  //   navigate("/login");
  // };
  // const updateData = (userid, name, email, username, password, contact) => {
  //   updateData.setItem("userid", userid);
  //   updateData.setItem("name", name);
  //   updateData.setItem("email", email);
  //   updateData.setItem("username", username);
  //   updateData.setItem("password", password);
  //   updateData.setItem("contact", contact);
  // };

  // const deleteUser = (userid) => {
  //   if (token) {
  //     axios
  //       .delete(`http://localhost:8080/user/delete/${userid}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((response) => {
  //         console.log("delete", response);
  //         getData();
  //       });
  //   }
  // };

  return (
    <div>
      <h1 style={{ color: "white", marginLeft: "45%" }}>All Records</h1>
      {/* <center> */}
      <button
        style={{
          backgroundColor: "pink",
          padding: "5px",
          width: "80px",
          // marginRight: "100px",
          // marginBottom: "10px",
        }}
        // onClick={handleLogout}
      >
        Logout{" "}
      </button>
      <table
        style={{ textAlign: "center", marginTop: "20px", marginLeft: "30%" }}
      >
        <thead>
          <tr style={{ border: "2px solid white" }}>
            <th className="head">Id</th>
            <th className="head">Name</th>
            <th className="head">Email</th>
            <th className="head">Contact</th>
            <th className="head">Username</th>
            <th className="head" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody style={{ border: "2px solid white", marginTop: "20px" }}>
          {data.map((eachData, index) => (
            <tr key={index}>
              <td>{eachData.userid}</td>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>{eachData.contact}</td>
              <td>{eachData.username}</td>
              <td>
                <Link to={`/update/${eachData.userid}`}>
                  <button
                    style={{
                      backgroundColor: "lightblue",
                      padding: "5px",
                      width: "80px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    onClick={() =>
                      updateData(
                        eachData.userid,
                        eachData.name,
                        eachData.email,
                        eachData.contact,
                        eachData.username,
                        eachData.password
                      )
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  style={{
                    backgroundColor: "lightcoral",
                    padding: "5px",
                    width: "80px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => {
                    deleteUser(eachData.userid);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </center> */}
    </div>
  );
}

export default Read;
