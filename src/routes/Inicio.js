import './routescss/Inicio.css';
import Footer from './Footer';
import Anuncios from './componentes/Carrusel/Anuncios';
import Barra from './Navbar';
import Texto from './componentes/Inicio/Text';
import { Col, Row } from 'react-bootstrap';



export default function Inicio(){
  return(
    <div className='w-100'>
      
      <Barra/>
      <div className='contenedor-inicio p-2'>
        <h1 className='imonster text-center fw-bold mt-3'>Bienvenid@</h1>
        
        <Row className='w-100'>
          <Col md={3}>
          <div className="w-50 m-auto">
        <svg style={{height:'150px'}}  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <path fill="#F07F1A" d="M39.3,-50.1C48.5,-47.4,51.9,-32.7,55.5,-18.7C59.1,-4.7,62.9,8.5,60,20.1C57.1,31.8,47.4,41.9,36.3,48.9C25.2,55.9,12.6,59.8,-2.3,62.9C-17.2,66.1,-34.4,68.6,-48.4,62.5C-62.5,56.5,-73.3,41.9,-69.3,28.6C-65.3,15.2,-46.4,3.1,-38.5,-9.8C-30.6,-22.7,-33.5,-36.5,-28.9,-40.7C-24.3,-44.8,-12.2,-39.4,1.4,-41.4C15,-43.4,30.1,-52.7,39.3,-50.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="w-80 d-flex flex-row">
       <svg style={{height:'130px'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <path fill="#F07F1A" d="M20.6,-35.1C27.2,-23.5,33.4,-18.2,34.4,-11.9C35.4,-5.7,31.2,1.5,27.4,7.5C23.6,13.6,20.2,18.4,15.7,30.5C11.2,42.7,5.6,62.1,-3.3,66.6C-12.1,71.1,-24.3,60.6,-31.7,49.4C-39.2,38.3,-42,26.4,-42.2,16C-42.4,5.6,-40,-3.3,-35.4,-9.6C-30.7,-16,-23.9,-19.8,-17.7,-31.5C-11.4,-43.2,-5.7,-62.8,0.6,-63.7C7,-64.5,13.9,-46.7,20.6,-35.1Z" transform="translate(100 100)" />
       </svg>
      <svg    style={{height:'100px'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <path fill="#F07F1A" d="M38.8,-47.9C51.9,-43.8,65.4,-34.7,73,-21.4C80.6,-8,82.2,9.6,76.8,24.5C71.3,39.5,58.9,51.7,44.9,52.5C31,53.4,15.5,42.8,-1.9,45.4C-19.3,48,-38.6,63.9,-48.5,61.7C-58.3,59.6,-58.7,39.4,-59,22.9C-59.3,6.3,-59.5,-6.5,-58.6,-22.1C-57.7,-37.6,-55.7,-55.8,-45.8,-60.9C-35.8,-66,-17.9,-58,-2.6,-54.5C12.8,-51,25.6,-51.9,38.8,-47.9Z" transform="translate(100 100)" />
       </svg>
      </div>
          </Col>
          <Col md={6}>
        <div className='bg-light rounded-3 p-2 w-100 shadow-sm mb-5 mt-5'>
        <iframe className="video  w-100" style={{height:'300px'}}  src="https://www.youtube.com/embed/nw3RkA_4On0?si=58CUj2Ump0cizcE0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
          </Col>
          <Col md={3}>
          <div className="w-80 d-flex flex-row">
       <svg    style={{height:'100px'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <path fill="#F07F1A" d="M38.8,-47.9C51.9,-43.8,65.4,-34.7,73,-21.4C80.6,-8,82.2,9.6,76.8,24.5C71.3,39.5,58.9,51.7,44.9,52.5C31,53.4,15.5,42.8,-1.9,45.4C-19.3,48,-38.6,63.9,-48.5,61.7C-58.3,59.6,-58.7,39.4,-59,22.9C-59.3,6.3,-59.5,-6.5,-58.6,-22.1C-57.7,-37.6,-55.7,-55.8,-45.8,-60.9C-35.8,-66,-17.9,-58,-2.6,-54.5C12.8,-51,25.6,-51.9,38.8,-47.9Z" transform="translate(100 100)" />
       </svg>
       <svg style={{height:'130px'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <path fill="#F07F1A" d="M20.6,-35.1C27.2,-23.5,33.4,-18.2,34.4,-11.9C35.4,-5.7,31.2,1.5,27.4,7.5C23.6,13.6,20.2,18.4,15.7,30.5C11.2,42.7,5.6,62.1,-3.3,66.6C-12.1,71.1,-24.3,60.6,-31.7,49.4C-39.2,38.3,-42,26.4,-42.2,16C-42.4,5.6,-40,-3.3,-35.4,-9.6C-30.7,-16,-23.9,-19.8,-17.7,-31.5C-11.4,-43.2,-5.7,-62.8,0.6,-63.7C7,-64.5,13.9,-46.7,20.6,-35.1Z" transform="translate(100 100)" />
       </svg>
      </div>
      <div className="w-50 m-auto">
        <svg style={{height:'150px'}}  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <path fill="#F07F1A" d="M39.3,-50.1C48.5,-47.4,51.9,-32.7,55.5,-18.7C59.1,-4.7,62.9,8.5,60,20.1C57.1,31.8,47.4,41.9,36.3,48.9C25.2,55.9,12.6,59.8,-2.3,62.9C-17.2,66.1,-34.4,68.6,-48.4,62.5C-62.5,56.5,-73.3,41.9,-69.3,28.6C-65.3,15.2,-46.4,3.1,-38.5,-9.8C-30.6,-22.7,-33.5,-36.5,-28.9,-40.7C-24.3,-44.8,-12.2,-39.4,1.4,-41.4C15,-43.4,30.1,-52.7,39.3,-50.1Z" transform="translate(100 100)" />
        </svg>
      </div>
            
          </Col>         
        </Row>
        <div className='p-5'>
        <Texto
         texto="La ciudad de Neiva, capital bambuquear del departamento del Huila, se encuentra el Museo Prehistórico, es toda una excursión al pasado. Ubicado debajo del monumento de la Gaitana, vas a disfrutar la evolución de los Dinosaurios de la prehistoria."
        />
        </div>
      </div>
      <Anuncios/>
      <Footer />
    </div>
  )
}