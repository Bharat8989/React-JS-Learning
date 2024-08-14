import {useState} from 'react';

// const users=
export const DerivedState=()=>{

    const [users,setUsers]=useState([
        {
            name:'alice', age:25
        },
        {
            name:'bob', age:29
        },
        {
            name:'charlie', age:26
        },
        {
            name:'angles', age:34
        },
    ])

    return (
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {
                    users.map((curElem,index)=>{
                        return (
                            <li key={index}>
                                {curElem.name} - {curElem.age} year old
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}