import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import "./style.css";

import SignUpPage from './Signup';

import React, { Component, useEffect } from 'react';
import AdminList from './AdminList';


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
      {/* <UserList /> */}
      <AdminList />
    </div>
  );
}

export default App;
