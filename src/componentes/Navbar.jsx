import './css/Navbar.css';
import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {BsClipboard2DataFill} from 'react-icons/bs';
import {FaUserEdit} from 'react-icons/fa';
import {AiTwotoneCalendar, AiOutlineHome} from 'react-icons/ai';
import {MdOutlineArrowDropDownCircle} from 'react-icons/md';
import Logo from '../img/Logo-Letra.png';

const NavBar = () =>{
  const [anchoDispositivo, setAncho] = useState(window.innerWidth);
  const [toggle, setToggle] = useState('');

  useEffect(() => {
    // Función para actualizar el ancho y la altura del dispositivo cuando cambia el tamaño de la ventana
    const updateDeviceDimensions = () => {
      setAncho(window.innerWidth);
    };

    // Agregar un event listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', updateDeviceDimensions);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', updateDeviceDimensions);
    };
  }, []);

  // Estilos responsive
  const stylebar=anchoDispositivo<800?{
    width:'100px',
  }:
  {
    width:'20%',
  };
  
  //Función que despliega la lista de subitems para administración

  function toggleIcon(){
    toggle?setToggle(''):setToggle('1');
  }

  //Arreglo Items Navbar
  const ItemsNav=[
    {
      route:'/',
      name:'Inicio',
      icon: <AiOutlineHome className='icon' />,

    },
    {
      route:'/Reportes',
      name:'Reportes',
      icon: <BsClipboard2DataFill className='icon' /> ,
    },
    {
      route:'/Administracion',
      name:'Administración',
      icon:<FaUserEdit />,
      subitems:[{ name:'Ver', route:'/Ver'},{ name:'Insertar', route:'/Insertar'},],
    },
    {
      route:'/Novedades',
      name:'Novedades',
      icon:<AiTwotoneCalendar className='icon' /> ,
    },
    {
      route:'/Configuracion',
      name:'Configuración',
      icon:<FiSettings className='icon' /> ,
    },
   
  ];



  return(
    <div className='h-100 navbar bg-light rounded d-flex flex-column p-2 gap-0' style={stylebar}>      
      <div className='head'>
      
        <a href='/'>
       <div className='con-logo w-100 d-flex justify-content-center rounded-circle'>
         <img 
         className='logo'
         src={Logo} 
         alt='Museo Prehistorico Logo' />
       </div>
        </a>
      </div>
      <div className='h-50 w-100 rounded '>
        <ul className='lista'>
        {ItemsNav.map((item)=>(
          <div className={item.subitems?'item-toggle':'item'}>
            {item.subitems?
            <div className='item'>
              <Link to={item.route} >
             <li key={item.name} className='d-flex gap-3'>
              {item.icon}
               <span className={anchoDispositivo<800?'d-none':'d-block'}>
                {item.name}
               </span>
               {item.subitems?<MdOutlineArrowDropDownCircle className={toggle?'toggle-act':'toggle'} onClick={toggleIcon}/>:''}
              </li>
              </Link>
            </div>
            :
            <Link to={item.route} >
            <li key={item.name} className='d-flex gap-3'>
             {item.icon}
             <span className={anchoDispositivo<800?'d-none':'d-block'}>
               {item.name}
             </span>
            </li>
            </Link>
            }
            {item.subitems?
              <ul className={`sublista ${toggle?'d-block':'d-none'}`}>
               {item.subitems.map((subitem)=>(
                <Link to={subitem.route}>
                <li key={subitem.name} className='subitem'>
                  <span>
                    {subitem.name}
                  </span>
                </li>
                </Link>
               ))}
              </ul> 
              : ''
             }
          </div>

         ))}
        </ul>  
      </div>
      <div className='h-25 w-100 perfil d-flex flex-row p-1 justify-content-end'>
      <hr></hr>
       
      </div>
    </div>
 )
}

export default NavBar;