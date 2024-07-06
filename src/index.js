import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import './App.css';
import App from "./components/App";
import LoginForm from "./components/loginform";
//import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);