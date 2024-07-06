
//import React from "react";
import './../styles/App.css';
import React, { useState } from 'react';
import LoginForm from './loginform';
//import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
        {
          isLoggedIn ? (
            <p>You are logged in!</p>
          ) : (
            <LoginForm onLogin={handleLogin} />
          )
        /* Do not remove the main div */
        }
    </div>
  );
};

export default App;
