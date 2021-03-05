import React, { useState } from 'react';
import api from '../../services/api';

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
      
  return (
    <>
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

        <button className = "btn" type = "submit">Entrar</button>
      </form>
    </>
  )
}