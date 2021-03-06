import React, { useState } from 'react';
import api from '../../services/api';
import '../Login/login.css'
import logo from '../../assets/atos-logo.png'

export default function Login({ history }) {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
      console.log(user);
      console.log(password);

      //const response = await api.post('/sessions', {user, password});

      //const { _id } = response.data;
      //localStorage.setItem('user', _id);
      history.push('/dashboard');
    };

    function handleSignup() {
      history.push('/signup');
    }
      
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
              placeholder = "Sua senha"
              value = {password}
              onChange = {event => setPassword(event.target.value)}>
        </input>
        
        <div className="btnLogin">
            <button className = "btn" onClick = { handleSignup }>Cadastrar</button>
            <button className = "btn" type = "submit">Entrar</button>
            
          </div>
      </form>
      </div>
    </div>
  );
};