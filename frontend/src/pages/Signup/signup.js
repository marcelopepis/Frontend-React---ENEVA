import React, { useState } from 'react';
import './signup.css';


export default function Signup({ history }) {

  const [ nome, setNome ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  async function handleSubmit( event ) {
    event.preventDefault();

    history.push('#');
  };

    
  return(
    <div className="container">
      <div className="content">
        <p>Cadastro de <strong>Usuário</strong></p>

        <form onSubmit = { handleSubmit }>
          <label htmlFor = "nome">Nome</label>
          <input type = "text"
                  id="nome"
                  placeholder = "Seu nome"
                  value = {nome}
                  onChange = {event => setNome(event.target.value)}>
          </input>
          <label htmlFor = "email">E-mail</label>
          <input type = "email"
                  id = "email"
                  placeholder = "Seu e-mail"
                  value = {email}
                  onChange = {event => setEmail(event.target.value)}>
          </input>

          <label htmlFor = "password">Senha</label>
          <input type = "password"
                id = "password"
                placeholder = "Sua senha"
                value = {password}
                onChange = {event => setPassword(event.target.value)}>
          </input>

            <button className = "btnCadastro" type = "submit">Cadastrar</button>          
        </form>
      </div>
    </div>
  );
};