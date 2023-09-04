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
    <nav className="shadow d-flex justify-content-center container-fluid">
      <div className="contenedor-items h-100">
        <ul className="d-flex justify-content-start">
          <li className=" shadow">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className=" shadow">
            <Link to={"/Nosotros"}>Nosotros</Link>
          </li>
          <li className=" shadow">
            <Link to={"/Experencias"}>Recuerdos</Link>
          </li>
        </ul>
      </div>
      <div className="contenedor-logo rounded-circle bg-dark h-100">
        <img src={Logo} alt="LogoHuilassikPark" />
      </div>
      <div className="contenedor-reserva d-flex align-item-center justify-content-center h-100 p-2 ">
       <Boton onclick={setForm} form={form} />
       <Formulario onclickVisi={setForm} visible={form} onclickemp={setFormemp} formemp={formemp} onclickcli={setFormcli} formcli={formcli}/>
      </div>
      
    </nav>
  )
}