import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsFile from  'react-icons/bs'

export const SidebarData = [
  {
    title:'Cadastro',
    path:'/cadastro',
    icon: <BsFile.BsFileEarmarkPlus/>,
    iconClosed: <RiIcons.RiArrowDownFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,
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
    path:'/consulta',
    icon: <AiIcons.AiOutlineFileSearch/>,
    iconClosed: <RiIcons.RiArrowDownFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,
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
    path:'/arquivo',
    icon: <FaIcons.FaFileCsv/>,
    iconClosed: <RiIcons.RiArrowDownFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,
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
    path:'/login',
    icon:<IoIcons.IoIosLogOut/>
  },
]