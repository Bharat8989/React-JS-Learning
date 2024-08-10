import "./EV.css"

import React from 'react'

export const EventHandling = () => {
    //   function handleButtonClick() {
    //     alert("Hey I am onClick Event");
    //   }
  
    const handleButtonClick = (event) => {
      console.log(event);
      console.log(event.target);
      console.log(event.type); // "click"
      alert("Hey I am onClick Event");
    }; 
    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
      };
      return (
        <>
          {/* Function Components with Named Functions */}
          <button onClick={handleButtonClick}>Click Me</button>
          <br />
          {/* Handling event using arrow function */}
          <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
          <br />
          {/* Inline Event Handlers */}
          <button onClick={(event) => console.log(event)}>Inline Function</button>
          <br />
          {/* Function Components with Inline Arrow Functions */}
          <button onClick={() => alert("Hey I am inline event function")}>
            Inline Arr Fun
          </button>
          <br />
          {/* Passing Arguments to Event Handlers */}
          <button onClick={() => handleWelcomeUser("Vinod")}>Click Me</button>
          <button onClick={() => handleWelcomeUser("Ram")}>Click Me</button>
        </>
      );
    };

export default EventHandling