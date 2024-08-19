import React, { useState } from 'react'

const ListStateUp = () => {
    const [inputValue,setInputValue]=useState("");
  return (
    <>
    <InputComponet inputValue={inputValue} setInputValue={setInputValue}/>
    <DisplayComponet inputValue={inputValue}/>
    </>
  )
}
const InputComponet=({setInputValue, inputValue})=>{
   
    return <>
    <input type="text" placeholder='enter your name' value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)} />
    </>
}

const DisplayComponet=({inputValue})=>{
    return <p>The current input value is:{inputValue}</p>
}

export default ListStateUp