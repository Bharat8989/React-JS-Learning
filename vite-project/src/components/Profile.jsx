import React from 'react'

const Profile = () => {
  return (
    <div>
        <h1>Profile Card challenge</h1>
        <ProfileCard name='Alice'
        age={20}
        greeting={
            <div>
                <strong>Hi alice, have a wonderful day!</strong>
            </div>
        }
        >
            <p>Hobbies:Reading,Hiking</p>
            <button>Contact</button>
        </ProfileCard>
        <ProfileCard 
        name='Bob'
        age={23}
        greeting={
            <div>
                <strong>Hello Bob, keep us the great work!</strong>
            </div>
        }
        >
            <p>Hobbies:Gaming,Cooking</p>
            <button>Contact</button>
        </ProfileCard>

    </div>
  )
}

export default Profile

function ProfileCard(props){
    return (
        <div>
        <h2>Name:{props.name}</h2>
        <p>Age:{props.age}</p>
        <p>{props.greeting}</p>
        <div>{props.children}</div>
        </div>
    )
}