import React from 'react';
import './App.css';
import logo from './assets/atos-logo.png'
import './services/api';
import Routes from './routes';

function App() {
  
  return (
    <div className="container">
      <img src = {logo} alt = "Atos"></img>
      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
