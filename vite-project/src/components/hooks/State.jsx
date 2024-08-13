import React, { useState } from 'react';

const State = () => {
  // Initializing the state with a default value of 0
  const [count, setCount] = useState(0);

  // Function to handle button click and increment the count
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className='main-div'>
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count}/>
    </>
  );
};

function ChildComponent({count}){
  console.log("child Component rendered")
  return (
    <div className="main.div">
      <h2>Child Component - {count}</h2>
    </div>
  )
}

export default State;
