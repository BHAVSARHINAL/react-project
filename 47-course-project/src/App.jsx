import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCourses from "./Components/AddCourse";
// import Home from "./Components/Home";
// import Course from "./Components/course";
// import AllCourses from "./Components/AllCourses";
// import AddCourse from "./Components/AddCourse";
import { Container, Row, Col } from "reactstrap";
import Menue from "./Components/Menue";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AddCourse from "./Components/AddCourse";
import AllCourses from "./Components/AllCourses";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Update from "./Components/Update";
// import Update from "../../45-React-CRUD/src/Components/Update";

function App() {
  // function handleClick() {
  //   toast.success("clicked...", {
  //     position: "top-center",
  //   });
  //}
  return (
    <>
      <ToastContainer />
      <Header />
      <Container>
        <Row>
          <Col md={4} style={{ marginTop: "30px" }}>
            <Menue />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/add-course" element={<AddCourse />}></Route>
              <Route path="/view-course" element={<AllCourses />}></Route>
              <Route path="/about-course" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/update/:id" element={<Update />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>

      {/* <Course /> */}
      {/* <Home />
      <AllCourses />
      <AddCourse /> */}
    </>
  );
}

export default App;
