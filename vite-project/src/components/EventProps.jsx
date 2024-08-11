import React from 'react';

const EventProps = () => {
    const handleHover = () => {
        alert("Hey, thanks for hovering over me!");
    };

    const handleWelcomeUser = (name) => {
        alert(`Hey ${name}, thanks for hovering over me!`);
    };

    return (
        <>
            <WelcomeUser onClick={() => handleWelcomeUser('Bharat')} onMouseEnter={handleHover} />
        </>
    );
};

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log("Hey user, welcome!");
        props.onClick();  // This will call the onClick function passed from the parent
    };

    return (
        <>
            <button onClick={props.onClick}>Click</button>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};

export default EventProps;