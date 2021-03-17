import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import './postos.css';

//import api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function Postos({ history }) {
  const [ numPosto, setNumPosto ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ idBacia, setIdBacia ] = useState('');
  const [ idSubbacia, setIdSubbacia ] = useState('');
  

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(numPosto);
    console.log(nome);
    console.log(idBacia);
    console.log(idSubbacia);
    handleOpen();
  }

  //CSS do Modal.
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ddd',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function handleCancel() {
    
    console.log("cancelado região");
    //handleOpen();
    history.push('/dashboard');
  }

  function handleFinishModal(){
    history.push('/dashboard');
  }

  function handleNewModal(){
    
    handleClose();
    history.push('/postos');
  }

  //modal de aviso ao usuário do status do cadastro.
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Sidebar></Sidebar>
      <div className="container">
        <div className="content">
          <p>Cadastro de <strong>Postos</strong></p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="numPosto">Número do Posto</label>
            <input type="text"
                    id="numPosto"
                    placeholder="posto"
                    required
                    value={numPosto}
                    onChange = {event => setNumPosto(event.target.value)}>
            </input>
            <label htmlFor="nome">Nome</label>
            <input type="text"
                    id="nome"
                    placeholder="Nome do Posto"
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
            <label>
              Escolha a Subbacia
              <select value={idSubbacia} required onChange={event => setIdSubbacia(event.target.value)}>
                <option value="01">01 SubBacia Teste</option>
                <option value="02">02 SubBacia Teste</option>
                <option value="03">03 SubBacia Teste</option>
                <option value="04">04 SubBacia Teste</option>
              </select>
            </label>
            <div className="btnArea">
              <button className = "btnCancelar" onClick={handleCancel}>Cancelar</button>
              <button className = "btnSalvar" type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Posto <strong>cadastrado</strong></h2>
              <p id="transition-modal-description">Informações cadastradas com sucesso!</p>
              <div className="btnAreaModal">
                <button className = "btnCancelarModal" onClick={handleFinishModal}>Painel</button>
                <button className = "btnSalvarModal" onClick={handleNewModal}>Novo</button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  )
}