import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
function Menue() {
  return (
    <div>
     

      <ListGroup style={{ marginBottom: "20px", cursor: "pointer" }}>
        <Link tag="a" to="/" className="list-group-item list-group-item-action">
          Home
        </Link>
      </ListGroup>
      <ListGroup style={{ marginBottom: "20px", cursor: "pointer" }}>
        <Link tag="a" to="/add-course" action  className="list-group-item list-group-item-action">
          Add course
        </Link>
      </ListGroup>
      <ListGroup style={{ marginBottom: "20px", cursor: "pointer" }}>
        <Link tag="a" to="/view-course" className="list-group-item list-group-item-action">
          View Course
        </Link>
      </ListGroup>
      <ListGroup style={{ marginBottom: "20px", cursor: "pointer" }}>
        <Link tag="a" to="/about-course" className="list-group-item list-group-item-action">
          About
        </Link>
      </ListGroup>
      <ListGroup style={{ marginBottom: "20px", cursor: "pointer" }}>
        <Link tag="a" to="/contact" className="list-group-item list-group-item-action">
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menue;
