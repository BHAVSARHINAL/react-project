// import React from 'react'

import { useState } from "react";

function AddContacts({ addContact }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleClick = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("please fill all fields");
      return;
    }
    addContact(contactData);
 
    setContactData({name:"",email:""})
  };
  return (
    <div className="formHeader">
      <h1>Add Contacts</h1>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter youe name"
          value={contactData.name}
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter youe email"
          value={contactData.email}
          onChange={handleChange}
        ></input>
      </form>
      <br></br>
      <button onClick={handleClick}>Add Contact</button>
      <br></br>
    </div>
  );
}

export default AddContacts;