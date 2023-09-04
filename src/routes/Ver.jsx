import NavBar from "../componentes/Navbar";
import Tabla from "../tables/TableBasics";
const Ver = () =>{
  return(
    <div className='route'>
      <NavBar />
      <div className="page-content py-2 px-5 w-100 ">
        <Tabla />
      </div>

    </div>

  )
}

export default Ver;
