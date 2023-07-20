import { Link } from "react-router-dom";
import './routescss/Menu.css';
import Logo from './img/Logo-Huila-Park2023.png';
import Boton from "./componentes/Boton";
import Formulario from "./componentes/Formulario";
import React, { useState } from 'react';

export default function Menu(){
  //Constantes de estado del formulario que se pueden controlar desde un componente atravez de los props
  const [form, setForm] = useState('');
  const [formemp, setFormemp] = useState('');
  const [formcli ,setFormcli] = useState('');
  return(
    <nav className="shadow">
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/Nosotros"}>Nosotros</Link>
        </li>
        <li>
          <Link to={"/Experencias"}>Experencias</Link>
        </li>
      </ul>
      <div className="contenedor-logo">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="contenedor-reserva">
       <Boton onclick={setForm} form={form} />
       <Formulario onclickVisi={setForm} visible={form} onclickemp={setFormemp} formemp={formemp} onclickcli={setFormcli} formcli={formcli}/>
      </div>
      
    </nav>
  )
}