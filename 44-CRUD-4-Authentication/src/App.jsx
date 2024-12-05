import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./Componenets/Login";
import Registration from "./Componenets/Registration";
import Home from "./Componenets/Home";
// import cors from "cors";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
