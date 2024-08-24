import React, { useState } from 'react'

const UseState = () => {
    let [data,setData]=useState(0)
    
    const addValue=()=>{
        if(data<20){
        setData(data+1)
        }
    }
    const removeValue=()=>
    {
        if(data>0){
        setData(data-1)
        }
    }
    
  return (
    <>
    
        <h1 className='flex justify-center'>How to use the state(useState)</h1>
       <div>
        <h3>Counter Value:{data} </h3>
        <br />
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
       </div>
    </>
  )
}

export default UseState