//rafce
import React from 'react'

const Practices = () => {
    const students=[];
    console.log(students.length)
    console.log(Boolean(students.length))
  return (
    <>
    <p>{students.length===0 && "No students found"}</p>
    <p>Number of students : {students.length}</p>

    </>
  )
}

export default Practices