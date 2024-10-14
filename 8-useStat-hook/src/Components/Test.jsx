import { useState } from "react";

export default function Test(){

  // const [count,setCount] = useState(0)
  const [state,setState] = useState({count:0,name:'Increment'});
  const count =state.count
  const name = state.name; 
  function increment(){
    setState(preStat=>{
      return {...preStat,name:'Increment',count:preStat.count+1}
    })
    // setCount(preCount=>preCount+2)
    // setCount(preCount=>preCount+1)
  }

  function decrement(){
    setCount(preStat=>{
      return {...preStat,name:'Decrement',count:preStat.Count-2}
  })
  return(

    <>
    {name}<br></br>
    <button onClick={increment}>+</button>{count}
    <button onClick={decrement}>-</button>
    
    </>
  )
}}