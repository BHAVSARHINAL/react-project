import AddTodo from "./AddTodo";
import AppName from "./AppName";

import "./App.css";
import TodoItem from "./TodoItem";
function App() {
  return (
    <>
      <div>
        <div className="todo-container">
          <AppName />
          <AddTodo />
          <div className="items-container">
            <TodoItem todoName="buy chocklet" todoDate="31/04/2021" />
            <TodoItem todoName="buy car" todoDate="31/04/2021" />

            {/* 
            <TodoItem1 />
            <TodoItem2 /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
