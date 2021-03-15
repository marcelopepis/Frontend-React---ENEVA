import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import "./subbacias.css";

export default function Subbacias({ history }) {
  const [ numSubbacia, setNumSubbacia ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ idBacia, setIdBacia ] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();
    console.log("teste");
    history.push('/dashboard');
  }
  function handleCancel() {
    console.log("cancelado subbacia");
    history.push('/dashboard');
  }



  return (
    <>
      <Sidebar></Sidebar>
      <div className="container">
        <div className="content">
          <p>Cadastro de <strong>Subbacias</strong></p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="numSubbacia">Número da Subbacia</label>
            <input type="text"
                    id="numSubbacia"
                    placeholder="Subbacia"
                    required
                    value={numSubbacia}
                    onChange = {event => setNumSubbacia(event.target.value)}>
            </input>
            <label htmlFor="nome">Nome</label>
            <input type="text"
                    id="nome"
                    placeholder="Nome da Subbacia"
                    value = {nome}
                    required
                    onChange = {event => setNome(event.target.value)}>
            </input>
            <label>
              Escolha a Bacia
              <select value={idBacia} required onChange={event => setIdBacia(event.target.value)}>
                <option value="01">01 Bacia Teste</option>
                <option value="02">02 Bacia Teste</option>
                <option value="03">03 Bacia Teste</option>
                <option value="04">04 Bacia Teste</option>
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