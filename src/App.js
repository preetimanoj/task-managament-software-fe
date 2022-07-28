import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import "./style.css";

import React, { Component, useEffect } from 'react';


function App() {

  React.useEffect(() => {
    // Runs after the first render() lifecycle
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
