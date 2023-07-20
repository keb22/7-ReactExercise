import Menu from './Menu';
import Footer from './Footer';
import './routescss/Experencias.css';

export default function Experencias(){
  return(
    <div>
      <Menu />
      <div className='contenedor-experencias'>
       <p> Este es el Experencias</p>
      </div>
      <Footer />
    </div>
  )
}