import "./App.css";
// import Header from "./assets/Header";
// import Profile from "./Profile";
import { useState,React } from "react";
function App() {
 
  const [count , setCounter] = useState(0)
function updateValue(){
  setCounter(count+1);
}
  return (
    <>
    <h1>Button count is {count}</h1>
    <button onClick={updateValue}>Click me</button>
    </>
  );
}

export default App;
