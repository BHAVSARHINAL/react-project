import { useEffect, useState } from "react";
//use effect hook
export default function Test() {
  const [count, setCount] = useState(0);
  const  [data,setData] = useState("hinal");
  useEffect(() => {
    console.log("button click");
  },[data]);
  function updateBtn() {
    setCount(count + 1);
  }
  function updatename(){
    setData('dev');
  }
  return (
    <>
      <h1>Button click {count} time</h1>
      <h1>my name is {data}</h1>
      <button onClick={updateBtn}>Click me</button>
      <button onClick={updatename}>update name</button>
    </>
  );
}
