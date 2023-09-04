import './routescss/Inicio.css';

import Menu from './Menu';
import Footer from './Footer';
import Video from './img/Video.mp4';

export default function Inicio(){
  return(
    <div>
      <Menu />
      <div className='contenedor-inicio'>
        <h1 className='imonster'>Bienvenid@</h1>
        <div className='contenedor-video shadow-sm'>
         <video className='video rounded-3 absolute' src={Video} >
          <p>Lo sentimos no ha sido posibel cargar el video</p> 
         </video>
        </div>
      </div>
      <Footer />
    </div>
  )
}