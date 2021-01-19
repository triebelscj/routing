import React from 'react';


const Color = (props) => {

    return (
        <div>
            <h1 style={{ backgroundColor: props.color, color: props.background }}>Your word is: {props.word} </h1>
        </div>
    );
}

export default Color;