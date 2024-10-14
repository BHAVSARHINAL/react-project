import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  //useEffect hook
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 2000);
  //   }, [count]);

  //   return (
  //     <>
  //       <h1>I've rended {count} times!!</h1>
  //     </>
  //   );
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button
        onClick={() => {
          setValue((pre) => pre - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((pre) => pre + 1);
        }}
      >
        +1
      </button>
      <h1>Count : {count.current}</h1>
    </>
  );
}

export default App;
