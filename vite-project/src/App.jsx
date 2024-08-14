import React from 'react';
// import NetflixSeries from '../src/components/NetflixSeries'
// import "./components/Netflix.css"

// import './components/Netflix.module.css'
// import EventHandling from './components/EventHandling';
// import EventProps from './components/EventProps';
// import EventPropagation from './components/EventPropagation';
import './components/EV.css'
import State from './components/hooks/State'
import { DerivedState } from './components/hooks/DericedState';



const App = () => {
  return (
    <section className='container'>

      {/* <h1 className='card-heading'>List of Best Netflix series</h1> */}
        {/* <NetflixSeries /> */}
        {/* <EventHandling/> */}
        {/* <EventProps/> */}
        {/* <EventPropagation/> */}

        {/* <State/> */}
        {/* <Sibling/> */}
        <DerivedState/>
    </section>
  )
  
}; 


export default App; 

export function Sibling(){
  console.log("sibling component rendered")
  return (
    <div className='main-div'>
      <h2>Sibling Component</h2>
    </div>
  )
}
 