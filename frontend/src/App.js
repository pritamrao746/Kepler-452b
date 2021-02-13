import React, { useState, useEffect } from 'react';
import { server } from "./config/config";
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';
import { ThemeProvider } from "styled-components";
import './App.css';
import './App.scss';

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
  textColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
  textColor: "white",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {

  const [word, setWord] = useState('not working ...');
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("light");

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
    // setWord('working ...');
  }

  useEffect(() => {
    // handleReq();
  }, []);

  return (
    // <ThemeProvider theme={themes[theme]}>
    //   <Dashboard theme={theme} setTheme={setTheme} />
    // </ThemeProvider>
    <ThemeProvider theme={themes[theme]}>
      <div className="App">
        <Dashboard theme={theme} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
