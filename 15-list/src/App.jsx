import { useState } from "react";
import "./App.css";

function App() {
  // const team = ["CSK", "MI", "RCB", "MI"];
  // const fruits = ["apple", "mango", "bnana", "orange"];

  const [allValues, setValues] = useState({ fnam: "hinal", lname: "bhavsar" });
  function update() {
    setValues({...allValues,  fnam: "dev" });
  }
  

  const [items,setItems] = useState([]);
  function  addItems(){
setItems([...items,{id:items.id,value:Math.random()}])
  }
  return (
    <>
      <h1>
        my name is {allValues.fnam} {allValues.lname}
      </h1>
      <button onClick={update}>Click me</button>


<ol>
  {items.map((it)=>(
    <li key={it.id}>{it.value}</li>
  ))}
</ol>
<button onClick={addItems}>Add itmes</button>
      {/* {team.map((ipl, index) => (
        <h2 key={index}>
          {ipl} index is {index}
        </h2>
      ))} */}

      {/* {fruits.map((fru,list) => (
        <h2 key={list}>{fru}</h2>
      ))} */}

      {/* {fruits.map((ite,index) => (
        <h4 key={index}>{ite}</h4>
      ))} */}
    </>
  );
}

export default App;
