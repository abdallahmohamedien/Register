import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Reset from './Components/Reset.jsx'
import Success from './Components/Success.jsx'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Reset />
  </React.StrictMode>
);

