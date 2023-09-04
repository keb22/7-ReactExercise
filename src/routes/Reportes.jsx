import NavBar from "../componentes/Navbar";

import SimpleChart from "../reportes/SimpleChart";
const Reportes = () =>{
  return(
    <div className='route'>
      <NavBar />
      <div className="page-content">
    
        <SimpleChart />
      </div>
    </div>

  )
}

export default Reportes;
