// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Create />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App;
