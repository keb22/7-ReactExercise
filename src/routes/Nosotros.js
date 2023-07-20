import Menu from './Menu';
import Footer from './Footer';
import './routescss/Nosotros.css';

export default function Nosotros(){
  return(
    <div >
      <Menu />
      <div className='contenedor-nosotros'>
        <p> Este es el contenedor Nosotros</p>
      </div>
      <Footer />
    </div>
  )
}