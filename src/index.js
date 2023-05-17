import React from 'react';
import ReactDOM from 'react-dom';
import logo192 from './logo192.png'

const container = document.getElementById('root')
const user= {
  FirstName:'Kevin',
  LastName:'Burgos',
  Age:16,
  School:'Promoción Social',
  Profession:'Programmer',
  Avatar:logo192,
}

const BringName=(user)=>{
  return user.FirstName
}
const Saludar=(user)=>{
  if(user){
    return<div>
      <img src={user.Avatar} />
     <h1>Hola {BringName(user)}</h1>
    </div>
  }
  return <h1>Hola Extraño</h1>
}

const element = Saludar(user)
ReactDOM.render(element, container)
