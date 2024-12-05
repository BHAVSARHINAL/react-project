import React, { useEffect, useState } from "react";

function Todo_Demo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const handleInput = (e) => {
    e.preventDefault();

    if (!inputValue) return;
    console.log(inputValue);
 

  if (task.includes(inputValue)) {
    setInputValue("");
    return;
  }
  setTask((preVal) => [...preVal, inputValue]);

  useEffect(()=>{
    
  })
};
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleInput}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button>Add name</button>
      </form>
      <section>
        {task.map((val, index) => {
          return (
            <>
              <ul>
                <li>{val}</li>
              </ul>
            </>
          );
        })}
        
      </section>
    </div>
  );
}

export default Todo_Demo;
