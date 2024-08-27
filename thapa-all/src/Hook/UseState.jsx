import React, { useState } from 'react'

const UseState = () => {
    const [data,setData]=useState(0)

  return (
    <div className='text-center text-white'>
     <h1> how to use useState</h1>
     <h2>value count:{data}</h2>
     <button onClick={()=>setData(data+1)} className='text-white text-center  '>Count </button>
      
     <button onClick={()=>setData(data-1)} className='text-white text-center  '>decrement </button>
    </div>
  )
}

export default UseState