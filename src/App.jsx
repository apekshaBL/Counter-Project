import { useState } from "react";
import "./App.css";

function App() {
  let [counter,setCounter] =useState(0);//setCounter this can of any name

  const addValue=()=>{
    // console.log("clicked",counter);
     counter=counter+1;
     setCounter(counter);
  }
  const removeValue=()=>{
    if(counter>0){
     counter=counter-1;
     setCounter(counter);
    }
  }
  return (
    <>
      <h1>Hello world!</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/><br/>
      <button onClick={removeValue}>Remove Value</button>
        
    </>
  )
}

export default App
