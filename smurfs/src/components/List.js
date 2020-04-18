import React, { useContext }  from "react";
import { smurfContext } from '../context/context';
import Smurf from './Smurf';
import "./List.css";

const List = () => {
    const data = useContext(smurfContext);

    return (
    <div className="List">
        {data.smurfs.map(smurf =>  {
            return (
                <Smurf
                key={smurf.id}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}/>  
        )})}
        </div>
    );
}

export default List;
