// import React from 'react'
import axios from "axios";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
function Read() {
  const [data, setData] = useState([]);
  // const { id } = useParams();

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
    updateData.setItem("password", password);
    updateData.setItem("contcat", contact);
  };

  console.log("update data",updateData);
  
  const deleteData = (id) => {
    axios.delete(`http://localhost:8080/api/users/delete/${id}`).then((res) => {
      console.log("delete", res);
      getData();
    });
  }
  return (
    <div>
      <h2>All Records</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.contact}</td>
                  <td>{eachData.password}</td>
                  <td>
                    <Link to={`/update/${eachData.id}`}>
                      <button
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
                        {updateData}
                        Edit
                      </button>
                    </Link>
</td>
<td>
                    <button
                      onClick={() => {
                        deleteData(eachData.id);
                      }}
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
