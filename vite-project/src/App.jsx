import React from 'react';
// import NetflixSeries from '../src/components/NetflixSeries'
// import "./components/Netflix.css"

import './components/Netflix.module.css'
import EventHandling from './components/EventHandling';
import EventProps from './components/EventProps';



const App = () => {
  return (
    <section className='container'>

      {/* <h1 className='card-heading'>List of Best Netflix series</h1> */}
        {/* <NetflixSeries /> */}
        {/* <EventHandling/> */}
        <EventProps/>

    </section>
  )
  
}; 


export default App; 
 