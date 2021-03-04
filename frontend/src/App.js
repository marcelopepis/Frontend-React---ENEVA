import React from 'react';
import './App.css';
import logo from './assets/atos-logo.png'

function App() {
  return (
    <div className="container">
      <img src = {logo} alt = "Atos"></img>
      <div className="content">
        <p>
          Teste de <strong>exemplo</strong> da descrição
        </p>
        <form>
          <label htmlFor = "email">E-MAIL</label>
          <input type = "text" 
                 id = "email" 
                 placeholder="Seu email">
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
