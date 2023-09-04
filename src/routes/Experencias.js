import Menu from './Menu';
import Footer from './Footer';
import './routescss/Experencias.css';

export default function Experencias(){
  return(
    <div>
      <Menu />
      <div className='contenedor-experencias'>
       <p> Este es el Experencias</p>
       <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMuseoPrehistorico&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1033992494624929" width="340" height="500" onScroll="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title='galeria'></iframe>
      </div>
      <Footer />
      
    </div>
  )
}