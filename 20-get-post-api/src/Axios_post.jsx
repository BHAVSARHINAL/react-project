// import React from "react";
import axios from "axios";
import { useState } from "react";
function Axios_post() {
  const data = { fname: "", lname: "" };
  const [inputData, setData] = useState(data);

  const handleChange = (e) => {
    setData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <h1>Hiii</h1>

      <label>FirstName :</label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleChange}
      ></input>

      <label>LastName :</label>
      <input
        type="text"
        name="lname"
        value={inputData.lname}
        onChange={handleChange}
      ></input>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default Axios_post;
