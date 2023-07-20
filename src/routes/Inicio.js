import './routescss/Inicio.css';

import Menu from './Menu';
import Footer from './Footer';

export default function Inicio(){
  return(
    <div>
      <Menu />
      <div className='contenedor-inicio'>
        <h1 className='imonster'>Bienvenid@</h1>
        <div className='contenedor-video'>
          <p>Video</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}