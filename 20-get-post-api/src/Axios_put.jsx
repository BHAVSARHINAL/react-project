// import React from "react";
import { useState } from "react";
import axios from "axios";
function Axios_put() {
  const data = { fname: "", lname: "" };
  const [inputData, setData] = useState(data);

  const chnageData = (e) => {
    setData({ ...inputData, [e.target.name]: e.target.value });
    console.log(e.target.name);
    
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
        // setData(response.data);
      });
  };
  const updateForm = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then((response) => {
        console.log(response);
      });
  };
  const deleteForm = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <label>First Name</label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={chnageData}
      />

      <label>Last Name</label>
      <input
        type="text"
        name="lname"
        value={inputData.lname}
        onChange={chnageData}
      />

      <button onClick={submitForm}>Submit</button>
      <button onClick={updateForm}>update</button>
      <button onClick={deleteForm}>delete</button>
    </div>
  );
}

export default Axios_put;
