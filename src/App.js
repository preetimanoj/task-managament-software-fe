import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import "./style.css";

import SignUpPage from './Signup';

import React, { Component, useEffect } from 'react';
import AdminList from './AdminList';

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import LoginPage from './Login';


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
      <BrowserRouter>
      {/* <AdminList /> */}
      <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/admin" element={<AdminList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
