import React,{ useRef, useState} from 'react'

const UsingRef = () => {
    const inpRef = useRef(null)

    const BtnClick=()=>{
        setTextInp(inpRef.current.value);
        inpRef.current.value = ""
    }

    const [textInp,setTextInp]=useState("")

  return (
    <div>
        <input type="text" placeholder="type..." ref={inpRef} ></input>
        <button onClick={BtnClick}>Enter</button>
        <div>{textInp}</div>
    </div>
  )
}

export default UsingRef;