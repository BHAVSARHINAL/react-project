import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Customers from "./Components/Customers";
import Price from "./Components/Price";
import Blog from "./Components/Blog";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/pricing" element={<Price />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        </div>
    </>
  );
}

export default App;
