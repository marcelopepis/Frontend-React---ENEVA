import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Bacias from './pages/bacias/bacias';
import Postos from './pages/postos/postos';
import Subbacias from './pages/subbacias/subbacias';
import Regioes from './pages/regioes/regioes';
import Hidro from './pages/hidroeletricas/hidro';
import Termo from './pages/termoeletricas/termo';
import FileUpload from './pages/fileUpload/fileUpload';
import Signup from './pages/Signup/signup';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component = {Login} />
        <Route path = "/dashboard" component = {Dashboard} />
        <Route path = "/bacias" component =  {Bacias} />
        <Route path = "/postos" component = {Postos} />
        <Route path = "/subbacias" component = {Subbacias} />
        <Route path = "/regioes" component = {Regioes} />
        <Route path = "/hidro" component = {Hidro} />
        <Route path = "/termo" component = {Termo} />
        <Route path = "/fileupload" component = {FileUpload} />
        <Route path = "/signup" component = {Signup} />        
      </Switch>
    </BrowserRouter>
    
  );
}