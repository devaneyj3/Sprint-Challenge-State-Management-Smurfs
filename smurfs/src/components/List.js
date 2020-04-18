import React, { useContext }  from "react";
import { smurfContext } from '../context/context';
import Smurf from './Smurf';
import "./List.css";

const List = () => {
    const smurfs = useContext(smurfContext);
    console.log(smurfs);
    return (
        <div className="List">
            {smurfs.map(smurf => (
                <Smurf
                    key={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}/>  
            ))}
        </div>
    );
}

export default List;
