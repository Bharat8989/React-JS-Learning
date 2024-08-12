import './EV.css'

import React from 'react'



const EventPropagation = () => {

    const handleGreeting=()=>{
        console.log("grandparent clicked")
    };
    const handleParentClick=(event)=>{
        console.log(event)
        event.stopPropagation();
        console.log("parent clicked")
     
    }
    const handleChildClick=(event)=>{
        console.log(event)
        console.log('child clicked')
    }

  return (
    <section className='main-div'>
        <div className='g-div'>
            <div className='p-div'>
                <button className='c-div' onClick={handleChildClick}>
                    Child Div
                </button>
            </div>
        </div>

    </section>
  )
}

export default EventPropagation