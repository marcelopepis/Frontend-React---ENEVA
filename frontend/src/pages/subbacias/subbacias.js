import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import "./subbacias.css";

export default function Subbacias() {
  const [ numSubbacia, setNumSubbacia ] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();
    console.log("teste");
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
                    placeholder="subbacia"
                    value={numSubbacia}
                    onChange = {event => setNumSubbacia(event.target.value)}>

            </input>


          </form>
        </div>
      </div>
    </>
  )
}