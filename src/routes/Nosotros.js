import Footer from './Footer';
import './routescss/Nosotros.css';
import Anuncios from './componentes/Carrusel/Anuncios';
import Barra from './Navbar';
import MisionVision from './componentes/Carrusel/MisionVision';



export default function Nosotros(){
  return(
    <div >
      <Barra />
      <div className='contenedor-nosotros px-2 py-4'>
      <h1 className='imonster text-center fw-bold'>Nosotros</h1>
      <MisionVision />
      </div>
      <Anuncios className="mt-2"/>
      <Footer />
    </div>
  )
}