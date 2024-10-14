import { useRef, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // function handleChange(e) {
  // if (e.target.name == "name") {
  //   const capName = e.target.value.toUpperCase();
  //   setName(capName);
  // } else {
  //   setPassword(e.target.value);
  // }}

  const refOb = useRef();
  console.log(refOb);
  function handleSubmit(e){
    e.preventDefault();
    console.log((refOb.current.value).toUpperCase())
    
;
  }
  return (
    <>
      <h1>hello</h1>
      <form className="app" onSubmit={handleSubmit}>
        <label>First name:</label>
        <input
          type="text"
         ref={refOb}
        ></input>
        <button>Submit</button>
        {/* <label>Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        ></input> */}
      </form>
    </>
  );
}
