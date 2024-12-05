// import React from "react";
import { useState } from "react";
import { Button, Container, FormGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
function AddCourse() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  function saveForm(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/create", {
        title: title,
        discription: discription,
      })
      .then((res) => {
        console.log(res);
        toast.success("record instedd...");
        clearForm();
      });
    function clearForm() {
      setTitle("");
      setDiscription("");
    }
  }

  return (
    <>
      <form
        style={{
          border: "2px solid black",
          marginLeft: "20px",
          marginTop: "40px",
        }}
        onSubmit={saveForm}
      >
        <h1 style={{ marginTop: "20px", textAlign: "center" }}>
          Fill course details..
        </h1>
        {/* <FormGroup style={{ marginLeft: "30px" }}>
          <label style={{ fontWeight: "bold" }}>Id</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your id"
            style={{ width: "600px" }}
          ></input>
        </FormGroup> */}

        <FormGroup style={{ marginLeft: "30px" }}>
          <label style={{ fontWeight: "bold" }}>Course Title: </label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your title"
            style={{ width: "600px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </FormGroup>

        <FormGroup style={{ marginLeft: "30px" }}>
          <label style={{ fontWeight: "bold" }}>Course Discription:</label>
          <br></br>
          <textarea
            type="textarea"
            placeholder="Enter your title"
            id="description"
            style={{ width: "600px" }}
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          ></textarea>
        </FormGroup>
        <Container className="text-center">
          <Button color="success" style={{ marginBottom: "40px" }}>
            Add course
          </Button>
          <Button
            color="info"
            style={{ marginLeft: "10px", marginBottom: "40px" }}
          >
            clear
          </Button>
        </Container>
      </form>
    </>
  );
}

export default AddCourse;
