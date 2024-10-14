// import React from 'react'

import { useReducer } from "react";

function Counter() {
  const initialStat = 0;
  const reducer = (stat, action) => {
    switch (action) {
      case "Increment":
        return stat + 1;
      case "Decrement":
        return stat - 1;
      default:
        return stat;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialStat);
  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <br></br>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
}

export default Counter;
