import React,{useState} from "react";
import "./AddSub.css"


const AddSub = () => {
const [counter,setCounter]= useState(0);

const handleAddition=()=>{
  setCounter(counter+1);
}

const handleSubt=()=>{
  setCounter(counter-1);
}
  return (
    <div className="counterex">
      <div className="valuecount">{counter}</div>
      <div className="buttons" >
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubt}>-</button></div>
    </div>
  )
};

export default AddSub;
