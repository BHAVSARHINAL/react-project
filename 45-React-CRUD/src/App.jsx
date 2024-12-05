// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Read from "./Components/Read";
import Update from "./Components/Update";
// import { ToastContainer } from "react-toastify";
// import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
  integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
/>;
function App() {
  return (
    <>
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update/:userid" element={<Update />}></Route>
        </Routes>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}

export default App;
