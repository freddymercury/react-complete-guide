import React from 'react';
import './Person.css';
// import Radium from 'radium';

const person = (props) => {

    return (
        <div className="Person" >
            <p onClick={props.click} >Hi I'm {props.name}.  My favorite hobby is {props.hobby}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;