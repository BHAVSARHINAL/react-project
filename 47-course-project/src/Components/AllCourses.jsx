import React, { useState } from "react";
import Course from "./course";
import axios from "axios";
import { useEffect } from "react";
import Update from "../../../45-React-CRUD/src/Components/Update";
function AllCourses() {
  const [courses, setCourses] = useState([]);
  function getCourse() {
    axios.get("http://localhost:8080/get").then((response) => {
      console.log("get course");
      console.log(response);
      setCourses(response.data);
    });
  }

  useEffect(() => {
    console.log("course");
    getCourse();
  }, []);

  const updateCourse = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Courses</h1>
      <p style={{ textAlign: "center" }}>List of courses as follow..</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} courses={item} update={updateCourse} />
          ))
        : "No Courses are available.."}
    </div>
  );
}

export default AllCourses;
