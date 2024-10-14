import { useState } from "react";
import "./App.css";
// import React from "react";
function App() {
//   const [colour , setColour] = useState("pink")
// const changeColor = () => {
//   setColour("blue")
// }


// const [car , setColour] = useState({
//   colour : "red",
//   model : "roma",
//   year : "2023",
//   brand : "ferrari"
// })

// const updateColour = () =>{
//   setColour((prev) => {
//     return {...prev , colour: "blue"}
//   })
// }
const [count , setCount] = useState(0);

const updateCount = () =>{
  setCount(count=>count+1);
  setCount(count=>count+1);
}

  return (
    <>
      {/* <h1>my favourite colour is {colour} !!</h1>
      <button onClick={changeColor}>Blue</button> */}
{/* 
<h1>My {car.brand}</h1>
<h2>It is {car.colour} {car.model} {car.year}!</h2>
<button onClick={updateColour}>Blue</button> */}

<h1>total count is {count}</h1>
<button onClick={updateCount}>add</button>
    </>
  );
}

export default App;
