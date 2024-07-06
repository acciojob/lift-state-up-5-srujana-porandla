
//import React from "react";
import './../styles/App.css';
import React, { useState } from 'react';
import LoginForm from './LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
        {
          isLoggedIn ? (
            <h1>You are logged in!</h1>
          ) : (
            <LoginForm onLogin={handleLogin} />
          )
        /* Do not remove the main div */
        }
    </div>
  )
}

export default App;
