import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./Child";

function App() {
  // const name = "hinal"
  function getData(data) {
    console.log(data);
  }
  return (
    <>
      <Child getData={getData} />
    </>
  );
}

export default App;
