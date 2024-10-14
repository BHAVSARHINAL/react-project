import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [activity, setActivity] = useState("");
  const [listData, setList] = useState([]);
  function addEvent() {
    setList((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setActivity("");
      return updateList;
    });
  }

  function removeActivity(i) {
    const updateList = listData.filter((ele, id) => {
      return i != id;
    });
    setList(updateList)
  }
  function removeAll(){
    setList([])
  } 
  return (
    <>
      <div>Todo List</div>
      <input
        type="text"
        placeholder="Add Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addEvent}>Add</button>
      <p>Here is your list : </p>
      {listData != [] &&
        listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div>
                  {data}
                  <button
                    onClick={() => {
                      removeActivity(i);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </p>
            </>
          );
        })}


        {listData.length>=1 && 
        <button onClick={removeAll}>Remove All</button>}
    </>

  );
}

export default App;
