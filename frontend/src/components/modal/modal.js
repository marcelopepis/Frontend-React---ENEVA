import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(option, title, message, history) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleFinishModal(){
    history.push('/dashboard');
  }

  function handleNewModal(){
    
    handleClose();
    history.push('/regioes');
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (option === true) {
    setOpen(true);
  }else {
    setOpen(false);
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
            <h2 id="transition-modal-title">{title}</h2>
            <p id="transition-modal-description">{message}</p>
            <div className="btnAreaModal">
              <button className = "btnCancelarModal" onClick={handleFinishModal}>Painel</button>
              <button className = "btnSalvarModal" onClick={handleNewModal}>Novo</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}