import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import AllCourses from "./AllCourses";
import { Link } from "react-router-dom";

function Course({ courses, update }) {
  function deleteId(id) {
    axios.delete("http://localhost:8080/delete/" + id).then((res) => {
      console.log("delete id");
      toast.success("record delete");
      update(id);
    });
  }

  const updateData = (id, title, discription) => {
    updateData.setItem("id", id);
    updateData.setItem("title", title);
    updateData.setItem("discription", discription);
  };

  return (
    // <div style={{fontFamily:'cursive'}}>
    <Card>
      <CardBody>
        <CardSubtitle style={{ fontWeight: "bold", textAlign: "center" }}>
          {courses.id}
        </CardSubtitle>
        <CardSubtitle style={{ fontWeight: "bold", textAlign: "center" }}>
          {courses.title}
        </CardSubtitle>
        <CardText style={{ textAlign: "center" }}>
          {courses.description}
        </CardText>
        <Container className="text-center">
          <Link to={`/update/${courses.id}`}>
            <Button
              color="warning "
              style={{ marginRight: "5px" }}
              onClick={() =>
                updateData(courses.id, courses.title, courses.discription)
              }
            >
              Update
            </Button>
          </Link>
          <Button color="danger" onClick={() => deleteId(courses.id)}>
            Delete
          </Button>
        </Container>
      </CardBody>
    </Card>
    // </div>
  );
}

export default Course;
