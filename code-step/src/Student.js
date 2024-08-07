//rafce
import React from 'react'

const Student = (props) => {
    console.log(props)
  return (
   
    <div style={{backgroundColor:"blue",margin:10}}>
         
        <h1>Student Name {props.name}</h1>
        <h3>Student email {props.email}</h3>
    </div>
  )
}

export default Student