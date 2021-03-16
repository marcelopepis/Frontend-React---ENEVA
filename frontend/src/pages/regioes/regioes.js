import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
//import "./subbacias.css";
//import api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function Subbacias({ history }) {
  const [ numRegiao, setNumSubbacia ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ sigla, setSigla ] = useState('');
  

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(numRegiao);
    console.log(nome);
    console.log(sigla);
    handleOpen();
  }

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
    history.push('/regioes');
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
          <p>Cadastro de <strong>Regiões</strong></p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="numRegiao">Número da Região</label>
            <input type="text"
                    id="numRegiao"
                    placeholder="Subbacia"
                    required
                    value={numRegiao}
                    onChange = {event => setNumSubbacia(event.target.value)}>
            </input>
            <label htmlFor="nome">Nome</label>
            <input type="text"
                    id="nome"
                    placeholder="Nome da Região"
                    value = {nome}
                    required
                    onChange = {event => setNome(event.target.value)}>
            </input>
            <label htmlFor="sigla">Sigla</label>
            <input type="text"
                    id="sigla"
                    placeholder="Nome da Região"
                    value = {sigla}
                    required
                    onChange = {event => setSigla(event.target.value)}>
            </input>
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
              <h2 id="transition-modal-title">Região cadastrada</h2>
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