import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, FormGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams,useNavigate } from "react-router-dom";
function Update() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/getById/" + id).then((res) => {
      console.log("get data");
      setData(res.data);
    });
  }, [id]);

  const updateForm = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8080/update/" + id, data).then((res) => {
      console.log("update data");
      toast.success("record apdate sucessfully..");
      navigate("/view-course" );
    });
  };
  return (
    <div>
      <form
        style={{
          border: "2px solid black",
          marginLeft: "20px",
          marginTop: "40px",
        }}
        onSubmit={updateForm}
      >
        <h1 style={{ marginTop: "20px", textAlign: "center" }}>Update Form</h1>
        <FormGroup style={{ marginLeft: "30px" }}>
          <label style={{ fontWeight: "bold" }}>Id</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your id"
            style={{ width: "600px" }}
            value={data.id}
            readOnly
          ></input>
        </FormGroup>

        <FormGroup style={{ marginLeft: "30px" }}>
          <label style={{ fontWeight: "bold" }}>Course Title: </label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your title"
            style={{ width: "600px" }}
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
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
            value={data.discription}
            onChange={(e) => setData({ ...data, discription: e.target.value })}
          ></textarea>
        </FormGroup>
        <Container className="text-center">
          <Button color="success" style={{ marginBottom: "40px" }}>
            Update course
          </Button>
          <Button
            color="info"
            style={{ marginLeft: "10px", marginBottom: "40px" }}
          >
            clear
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default Update;
