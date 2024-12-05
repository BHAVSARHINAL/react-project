import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import axios from "axios";
function GetUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  },[]);

  function getUsers() {
    axios.get("http://localhost:8080/get").then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }
  return (
    <div>
      <h2>List of users...</h2>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>gender</th>
          <th>mobile</th>
          <th>DateOfBirth</th>
          <th>username</th>
        </tr>
      </thead>

      {data.map((eachData, index) => {
        return (
          <tbody key={index.id}>
            <tr>
              <td>{eachData.id}</td>
              <td>{eachData.date_of_birth}</td>
              <td>{eachData.email}</td>
              <td>{eachData.gender}</td>
              <td>{eachData.mobile}</td>
              <td>{eachData.name}</td>
              <td>{eachData.username}</td>
            </tr>
          </tbody>
        );
      })}
    </div>
  );
}

export default GetUser;
