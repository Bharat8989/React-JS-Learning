import { useState } from 'react';

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: 'alice', age: 25 },
        { name: 'bob', age: 29 },
        { name: 'charlie', age: 26 },
        { name: 'angles', age: 34 },
    ]);

    const userCount = users.length;
    const averageAge = users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

    return (
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {users.map((curElem, index) => (
                    <li key={index}>
                        {curElem.name} - {curElem.age} years old
                    </li>
                ))}
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Average Age: {averageAge.toFixed(2)}</p>
        </div>
    );
};
