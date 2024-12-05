import "./App.css";
import { Routes, Route } from "react-router-dom";
import Lecture from "./Components/Lecture";
import Test from "./Components/Test";
import Report from "./Components/Report";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Lecture />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/reports" element={<Report />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
