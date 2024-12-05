// import React from 'react'

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Read() {
  const [data, setData] = useState([]);
  function getData() {
    axios.get("http://localhost:8080/api/users/getAllUser").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  const updateData = (id, name, email, password, contact) => {
    updateData.setItem("id", id);
    updateData.setItem("name", name);
    updateData.setItem("email", email);
    updateData.setItem("password", password);
    updateData.setItem("contact", contact);
  };
  function handleDelete(id) {
    axios
      .delete(`http://localhost:8080/api/users/delete/${id}`)
      .then((response) => {
        console.log("relete record", response);
        getData();
      });
  }

  return (
    <div>
      <table>
        <thead>
          <h2>Read form</h2>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>contact</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        {data.map((eachData, index) => {
          return (
            <>
              <tbody key={index}>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.passwod}</td>
                  <td>{eachData.contact}</td>
                  <td>
                    <Link to={`/update/${eachData.id}`}>
                      <button
                        onClick={() =>
                          updateData(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.passwod,
                            eachData.contact
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(eachData.id)}>
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
