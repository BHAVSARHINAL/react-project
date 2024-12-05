import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tast, setTask] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    if (tast.includes(inputValue)) {
      setInputValue("");
      return;
    }
    // setTask({...tast,inputValue})

    setTask((prevTask) => [...prevTask, inputValue]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button>Add Task</button>
      </form>
      <section>
        {tast.map((task, index) => {
          return (
            <>
              <ul>
                <li>{task}</li>
              </ul>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default Todo;
