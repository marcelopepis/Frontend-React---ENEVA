import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsFile from  'react-icons/bs'

export const SidebarData = [
  {
    title:'Cadastro',
    
    icon: <BsFile.BsFileEarmarkPlus/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Bacias',
        path: '/bacias',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Subbacias',
        path: '/subbacias',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Postos',
        path: '/postos',
        icon: <IoIcons.IoIosPaper/>,
      },      
      {
        title: 'Regiões',
        path: '/regioes',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Termoelétricas',
        path: '/hidro',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Hidroelétricas',
        path: '/hidro',
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
        title: 'Envio de Arquivo',
        path: 'arquivo/teste1',
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