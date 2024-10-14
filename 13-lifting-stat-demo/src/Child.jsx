import { useState } from "react";

function Child(props) {
  const [name, setName] = useState();
  function handleEvent(e) {
    e.preventDefault();
props.getData(name)
  }
  return (
    <>
      {/* <h1>Hello, {name.name}</h1> */}
      <form onSubmit={handleEvent}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}
export default Child;
