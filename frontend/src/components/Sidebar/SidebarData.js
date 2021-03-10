import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsFile from  'react-icons/bs'

export const SidebarData = [
  {
    title:'Cadastro',
    path:'/dashboard',
    icon: <BsFile.BsFileEarmarkPlus/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Bacias',
        path: 'cadastro/bacias',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Postos',
        path: 'cadastro/postos',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Subbacias',
        path: 'cadastro/subbacias',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Regiões',
        path: 'cadastro/regioes',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]  
  },
  {
    title:'Consulta',
    path:'/dashboard',
    icon: <AiIcons.AiOutlineFileSearch/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Teste 1',
        path: 'consulta/teste1',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Teste 2',
        path: 'consulta/teste2',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]  
  },
  {
    title:'Arquivo',
    path:'/dashboard',
    icon: <FaIcons.FaFileCsv/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Arquivo 1',
        path: 'arquivo/teste1',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Arquivo 2',
        path: 'arquivo/teste2',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]  
  },
  {
    title:'Sair',
    path:'/',
    icon:<IoIcons.IoIosLogOut/>
  },
]