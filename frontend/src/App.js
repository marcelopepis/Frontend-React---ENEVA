import React, { useState } from 'react';
import './App.css';
import logo from './assets/atos-logo.png'
import './services/api';

function App() {
  const [ user, setUser ] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log("hello world!!")
    
  };

  return (
    <div className="container">
      <img src = {logo} alt = "Atos"></img>
      <div className="content">
        <p>
          Texto de <strong>exemplo</strong> da descrição
        </p>
        <form onSubmit = {handleSubmit}>
          <label htmlFor = "user">Usuário</label>
          <input type = "text" 
                 id = "user" 
                 placeholder="Seu usuário"
                 value = {user}
                 onChange = {event => setUser(event.target.value)}>
          </input>

          <label htmlFor = "password">Senha</label>
          <input type = "password"
                id = "password"
                placeholder = "Sua senha">
          </input>

          <button className = "btn" type = "submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
