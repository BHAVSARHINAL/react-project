import { useRef, useState } from "react";

export default function UseRefDemo() {

  const refElement = useRef("");
const [name , setName] = useState("Hinal");

  console.log(refElement);
  function reset(){
    setName("");
    refElement.current.focus();
  }
  function changeColour(){
    refElement.current.style.color='blue';
    refElement.current.style.value="devv...";
  }
  return (
    <>
    <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
      {/* <h1>learn useref stat</h1> */}
<button onClick={reset}>Reset</button>
<button onClick={changeColour}>update colour</button>
    </>
  );
}
