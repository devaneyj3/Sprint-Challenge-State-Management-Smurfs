import React, { useState, useContext }  from "react";
import axios from 'axios';
import { smurfContext } from '../context/context';

import "./AddSmurfForm.css";

const AddSmurfForm = props => {
    const [ data, setData ] = useState({
        name: '',
        age: '',
        height: ''
    });

    const newSmuf = useContext(smurfContext)

    

    const AddSmurf = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3333/smurfs', data)
            .then(res => newSmuf.setSmurfs(res.data))
            .catch(err=> console.log(err))
        setData({name: '', age: '', height: ''})

    }

    const Change = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    return (
        <div className="AddSmurfForm">
            <form onSubmit={AddSmurf}>
                <input type='text' name='name' placeholder="Enter name" onChange={(e) => Change(e)} />
                <input type='text' name='age' placeholder="Enter age"  onChange={(e) => Change(e)}/>
                <input type='text' name='height' placeholder="Enter height"  onChange={(e) => Change(e)}/>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default AddSmurfForm;
