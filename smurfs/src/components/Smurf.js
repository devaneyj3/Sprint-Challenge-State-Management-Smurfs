import React  from "react";

import "./Smurf.css";

const Smurf = props => {
    return (
        <div className="Smurf">
            <h1>name: {props.name}</h1>
            <p>age: {props.age}</p>
            <p>height: {props.height}</p>
        </div>
    );
}

export default Smurf;
