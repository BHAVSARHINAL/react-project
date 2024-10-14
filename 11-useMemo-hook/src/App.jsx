import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const multiplication = useMemo(
    function multiply() {
      console.log("***************");

      return add * 10;
    },
    [add]
  );

  return (
    <>
      {multiplication}
      <br></br>
      <h1>Learning usememo hook</h1>
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Addition
      </button>
      <span>{add}</span>
      <br></br>
      <button
        onClick={() => {
          setMinus(minus - 1);
        }}
      >
        Substraction
      </button>
      <span>{minus}</span>
    </>
  );
}

export default App;
