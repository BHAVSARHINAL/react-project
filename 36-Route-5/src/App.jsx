import "./App.css";
import { Routes, Route } from "react-router-dom";
import Laptop from "./Components/Laptop";
import Computer from "./Components/Computer";
import Phone from "./Components/Phone";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/laptop" element={<Laptop />}></Route>
          <Route path="/computer" element={<Computer />}></Route>
          <Route path="/phone" element={<Phone />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
