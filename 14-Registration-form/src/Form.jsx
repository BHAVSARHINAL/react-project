import React, { useState } from "react";

function Form() {
  const data = {name: "", email: "", password: "" };
  const [InputData, setInputData] = useState(data);
  const [flag, setFlag] =useState(false)
  function handleData(e) {
    setInputData({...InputData, ["e.target,name"]: e.target.value });
    console.log(InputData);
  }

  function handleSubmit() {
    if (!InputData.name || !InputData.email || !InputData.password) {
      alert("all fields are mandetory....");
    }else{
      setFlag(true)
    }
  }

  return (
    <>
    <pre>{(flag)?<h2>hello ,{InputData.name},YOU HAVE REGISTER SUCESSFULLY</h2>:""}</pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">Registration form</div>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={InputData.name}
            placeholder="enter your name"
            onChange={handleData}
          />
          <br></br>

          <label>Email : </label>
          <input
            type="text"
            name="name"
            value={InputData.email}
            placeholder="enter your email"
            onChange={handleData}
          />
          <br></br>

          <label>Password : </label>
          <input
            type="text"
            name="name"
            value={InputData.password}
            placeholder="enter your password"
            onChange={handleData}
          />
          <br></br>
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
