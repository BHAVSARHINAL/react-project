// import React from "react";

import "./App.css";
import useCounter from "./useCounter";

function App() {
  const [count,increment,decrement] = useCounter()
  return (
    <>
      <h1>count is :{count}</h1>
      <button onClick={increment}>Increment</button>
      <br></br>
      <br></br>

      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
