import React, { useState, useEffect } from 'react';
import { server } from "./config/config";
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';
import './App.css';

function App() {

  const [word, setWord] = useState('not working ...');
  const [text, setText] = useState('none');

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleReq = async () => {
    // axios call
    const response = await axios.get(`${server}/api`, {
      params: {
        text: text,
      },
    });
    console.log(response);
    setWord('working ...');
  }

  useEffect(() => {
    // handleReq();
  }, []);

  return (
    <div className="App">
      <Dashboard />
      {/* <input type = "text" value={text} onChange = {handleText} />
      <button onClick = {handleReq}> Submit </button>
      <p> { word } </p> */}
    </div>
  );
}

export default App;
