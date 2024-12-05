// import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios.get("http://localhost:8080/api/users/getAllUser").then((res) => {
      setData(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  const updateData = (id, name, email, password, contact) => {
    updateData.setItem("id", id);
    updateData.setItem("name", name);
    updateData.setItem("email", email);
    updateData.setItem("passwod", password);
    updateData.setItem("contact", contact);
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/users/delete/${id}`).then((Res) => {
      console.log(Res);

      alert("your record has been deleted.");
      getData();
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Records</h2>
      <Link to="/">
        <button
          type="button"
          className="btn btn-dark"
          style={{ marginLeft: "67%", marginTop: "5px" }}
        >
          Add Contact
        </button>
      </Link>

      <table
        className="table table-hover table-dark"
        style={{
          width: "700px",
          padding: "70px",
          marginLeft: "33%",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Contact</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        {data.map((eachData, index) => {
          return (
            <>
              <tbody style={{ padding: "40px" }} key={index}>
                <tr>
                  <th scope="row"> {eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>{eachData.contact}</td>
                  <td>
                    <Link to={`/update/${eachData.id}`}>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() =>
                          updateData(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.password,
                            eachData.contact
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default Read;
