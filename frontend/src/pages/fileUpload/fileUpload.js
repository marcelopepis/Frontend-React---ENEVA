import React, { useState } from 'react';
import Upload from '../../components/Upload/upload';
import Sidebar from '../../components/Sidebar/Sidebar';
import FileList from '../../components/FileList/fileList';

export default function FileUpload( {history} ) {
  return(
    <>
      <Sidebar></Sidebar>
      <div className="container">
        < div className="content">
          <Upload></Upload>
          <FileList></FileList>
        </div>
      </div>
    </>
  );
}