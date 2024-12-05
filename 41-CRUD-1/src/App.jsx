import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import { Routes, Route } from "react-router-dom";

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
