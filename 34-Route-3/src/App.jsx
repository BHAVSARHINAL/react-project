import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
