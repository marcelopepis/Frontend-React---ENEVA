import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./hidro.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function Hidro( {history }) {

  const [ idUsina, setIdUsina ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ empresa, setEmpresa ] = useState('');
  const [ posto, setPosto ] = useState('');
  const [ jusante, setJusante ] = useState('');
  const [ ree, setRee ] = useState('');
  const [ base, setBase ] = useState('');
  const [ idRegiao, setIdRegiao ] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
    console.log(empresa);
    console.log(posto);
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
    
    console.log("cancelado subbacia");
    //handleOpen();
    history.push('/dashboard');
  }

  function handleFinishModal(){
    history.push('/dashboard');
  }

  function handleNewModal(){
    
    handleClose();
    history.push('/subbacias');
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
          <p>Cadastro de <strong>Hidroelétrica</strong></p>
          <form onSubmit={handleSubmit}>
          <label htmlFor="idUsina">Id </label>
            <input type="text"
                    id="idUsina"
                    placeholder="Id da Hidroelétrica"
                    required
                    value={idUsina}
                    onChange = {event => setIdUsina(event.target.value)}>
            </input>
            <label htmlFor="nome">Nome</label>
            <input type="text"
                    id="nome"
                    placeholder="Nome da hidroelétrica"
                    required
                    value={nome}
                    onChange = {event => setNome(event.target.value)}>
            </input>
            <label htmlFor="empresa">Empresa</label>
            <input type="text"
                    id="empresa"
                    placeholder="Nome da Empresa"
                    value = {empresa}
                    required
                    onChange = {event => setEmpresa(event.target.value)}>
            </input>
            <label htmlFor="posto">Posto</label>
            <input type="text"
                    id="posto"
                    placeholder="Id do Posto"
                    value = {posto}
                    required
                    onChange = {event => setPosto(event.target.value)}>
            </input>
            <label htmlFor="jusante">Jusante</label>
            <input type="text"
                    id="jusante"
                    placeholder="Informe o Jusante"
                    value = {jusante}
                    required
                    onChange = {event => setJusante(event.target.value)}>
            </input>
            <label htmlFor="ree">REE</label>
            <input type="text"
                    id="ree"
                    placeholder="Informe o REE"
                    value = {ree}
                    required
                    onChange = {event => setRee(event.target.value)}>
            </input>
            <label htmlFor="base">Base</label>
            <input type="text"
                    id="base"
                    placeholder="Informe a Base"
                    value = {base}
                    required
                    onChange = {event => setBase(event.target.value)}>
            </input>
            <label htmlFor="idRegiao">Id da Região</label>
            <input type="text"
                    id="idRegiao"
                    placeholder="Informe o Id da Região"
                    value = {idRegiao}
                    required
                    onChange = {event => setIdRegiao(event.target.value)}>
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
              <h2 id="transition-modal-title">Hidroelétrica cadastrada</h2>
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
