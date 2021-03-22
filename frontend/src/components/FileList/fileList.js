import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { FileInfo, Preview } from './styles';
import { MdCheckCircle, MdError, MdLink }  from 'react-icons/md';
import 'react-circular-progressbar/dist/styles.css';

const FileList = () => (
  <div className="Container">
    <li>
      <FileInfo>
        <Preview src="../../assets/excel.png">
        </Preview>
        <div>
          <strong>arquivo.xlsx</strong>
          <span>512kb <button onClick={() => {}}>Excluir</button></span>
        </div>
      </FileInfo>
      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24},
            path: { stroke: '#7159c1'},
          }}
          strokeWidth={10}
          percentage={60}
        >
        <a href="../../assets/excel.png"
        target="_blank"
        rel="noopener noreferrer">
          <MdLink style={{ marginRight: 8}} size={24} color="#222" />
        </a>

        <MdCheckCircle size={24} color="#78e5d5"></MdCheckCircle>
        <MdError size={24} color="e57878"></MdError>
        </CircularProgressbar>
      </div>
    </li>
  </div>
);

export default FileList;