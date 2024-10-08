import React from 'react';
import ReactDOM from 'react-dom/client';//react 18
// import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));//react 18
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


