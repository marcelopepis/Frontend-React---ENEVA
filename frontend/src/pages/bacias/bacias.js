import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import "./bacias.css";
//import api from '../../services/api';


export default function Bacias({ history }) {

  const [numBacia, setNumBacia ] = useState('');
  const [nome, setNome] = useState('');
  const [idRegiao, setIdRegiao] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(numBacia);
    console.log(nome);
    console.log(idRegiao);

    history.push('/dashboard');
  };

  function handleCancel(event){
    console.log("cancelado");
    history.push('/dashboard');
  };

  return (
    <>
      <Sidebar></Sidebar>
      <div className="container">
        <div className="content">
          <p>Cadastro de <strong>Bacias</strong></p>
          <form onSubmit = {handleSubmit}>
            <label htmlFor="numBacia">Número da Bacia</label>
            <input type="text"
                    id="numBacia"
                    placeholder="bacia"
                    value = {numBacia}
                    required
                    onChange = {event => setNumBacia(event.target.value)}>

            </input>
            <label htmlFor="nome">Nome</label>
            <input type="text"
                    id="nome"
                    placeholder="nome da bacia"
                    value = {nome}
                    required
                    onChange = {event => setNome(event.target.value)}>
            </input>
            <label>
            Escolha a Região
            <select value={idRegiao} required onChange={event => setIdRegiao(event.target.value)}>
              <option value="01">01 Região Teste</option>
              <option value="02">02 Região Teste</option>
              <option value="03">03 Região Teste</option>
              <option value="04">04 Região Teste</option>
            </select>
            </label>
            <div className="btnArea">
              <button className = "btnCancelar" onClick={handleCancel}>Cancelar</button>
              <button className = "btnSalvar" type = "submit">Salvar</button>
            </div>
            

          </form>
        </div>
      </div>
    </>
  )
}