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
      <section className='main-div'>
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </section>
    </>
  );
};

export default State;
