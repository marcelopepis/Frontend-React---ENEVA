import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import  { DropContainer, UploadMessage } from './styles.js';


export default class Upload extends Component {
  
  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
    }
    if(isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }
    return <UploadMessage type="success">Clique ou arraste seus arquivos aqui</UploadMessage>
  }
  
  render() {
    return (
      <Dropzone accept=".xls, .xlsx, .xlsm, .csv" onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
          <DropContainer
            {... getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >            
            <input {... getInputProps()}>
              
            </input>
            {this.renderDragMessage(isDragActive, isDragReject)}
            
          </DropContainer>
          
        
        
        }
      </Dropzone>
    );
  }
}