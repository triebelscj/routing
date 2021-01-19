
import React from 'react';


const Value = (props) => {

    let value = props.value
    if (isNaN(value) === false) {
        return (
            <div>
                <h2>The number is: {props.value}</h2>
            </div>
        )
    } else {
        return (
            <h1>Your word is: {props.hello} </h1>
        );
    }
}

export default Value;