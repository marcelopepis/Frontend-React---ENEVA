import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import "./bacias.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
    handleOpen();
    //history.push('/dashboard');
  };

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
    
    console.log("cancelado subbacia");
    //handleOpen();
    history.push('/dashboard');
  }

  function handleFinishModal(){
    history.push('/dashboard');
  }

  function handleNewModal(){
    
    handleClose();
    history.push('/bacias');
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
          <p>Cadastro de <strong>Bacias</strong></p>
          <form onSubmit = {handleSubmit}>
            <label htmlFor="numBacia">Número da Bacia</label>
            <input type="number"
                    id="numBacia"
                    placeholder="bacia"
                    value = {numBacia}
                    required
                    onChange = {event => setNumBacia(event.target.value)}>

            </input>
            <label htmlFor="nome">Nome</label>
            <input type="text"
                    id="nome"
                    placeholder="Nome da bacia"
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
              <h2 id="transition-modal-title">Bacia <strong>cadastrada</strong></h2>
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