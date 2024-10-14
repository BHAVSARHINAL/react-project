import axios from "axios";
import { useState } from "react";

function AxiosPost() {
  const data = { fname: "", lname: "" };
  const [inputData, setInputData] = useState(data);
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <label>First name:</label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleChange}
      ></input>

      <label>Last name:</label>
      <input
        type="text"
        name="lname"
        value={inputData.lname}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AxiosPost;
