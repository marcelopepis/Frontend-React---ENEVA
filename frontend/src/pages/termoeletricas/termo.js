import React, { useState } from 'react';
import './termo.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default function Termo({ history }){

  const [ idUsina, setIdUsina ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ idRegiao, setIdRegiao ] = useState('');
  

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
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
    history.push('/termo');
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
          <p>Cadastro de <strong>Termoelétricas</strong></p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="idUsina">ID</label>
            <input type="text"
                    id="Id da Usina"
                    placeholder="idUsina"
                    required
                    value={idUsina}
                    onChange = {event => setIdUsina(event.target.value)}>
            </input>
            <label htmlFor="nome">Nome</label>
            <input type="text"
                    id="nome"
                    placeholder="Nome da Usina"
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
              <h2 id="transition-modal-title">Termoelétrica cadastrada</h2>
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
  );
};