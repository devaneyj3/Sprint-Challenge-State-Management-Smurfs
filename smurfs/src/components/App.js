import React, { useEffect, useState }  from "react";
import { smurfContext } from '../context/context';
import axios from 'axios';
import List from './List.js';
import AddSmurfForm from './AddSmurfForm';
import "./App.css";

const App = () => {
  const [ smurfs, setSmurfs] = useState([]);
    
  useEffect(() => {
      axios.get('http://localhost:3333/smurfs')
          .then(res => setSmurfs(res.data))
  }, [])

  return (
    <smurfContext.Provider value={smurfs}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurfForm/>
      </div>
      <List />
    </smurfContext.Provider>
  );
}

export default App;
