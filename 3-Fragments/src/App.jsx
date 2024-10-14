// import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  let foodItems = ["Vagetables", "Fruits", "butter", "Ghee", "Cheese", "wheet"];
  // let foodItems = [];

  //if else condition
  // if (foodItems.length === 0) {
  //   return <h1>Empty list..</h1>;
  // }
  let [textToShow, setTextState] = useState("Food iten enter by user");
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  return (
    <>
      {/* <React.Fragment> */}
      <h1>Fragments</h1>

      {/* use ternary operator.. */}
      {/* {foodItems.length === 0 ? <h1>Empty list..</h1> : "" } */}

      {/* logical operator */}
      {/* {foodItems.length === 0 && <h5>Empty..</h5>} */}
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
