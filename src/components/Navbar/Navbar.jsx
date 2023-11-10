import logoShoppyApp from '../../assets/logoShoppyApp.svg'

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
  
 
 <div className=" border-bottom py-3 mx-3">
   <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     
     <Link className=" d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none" to="/">
       <img src={logoShoppyApp} alt="fuck" width="40" height="40" className="d-inline-block align-text-top"/>
       
     </Link>
     
 
     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
       
       <li><Link  to="./catalogo" className="nav-link px-2 link-body-emphasis">Catalogo </Link></li>
       <li><Link to="./products" className="nav-link px-2 link-body-emphasis">Productos </Link></li>
       <li><Link  to ="./categorias"className="nav-link px-2 link-body-emphasis">Categorias</Link></li>
       <li><Link to="about" className="nav-link px-2 link-secondary">Quienes Somos</Link></li>
     </ul>
 
     <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-top" role="search">
       <input type="search" className="form-control" placeholder="buscar..." aria-label="Search"/>
     </form>
 
     <div className="dropdown text-end">
       <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
       </a>
       <ul className="dropdown-menu text-small">
         <li><Link className="dropdown-item" to="./userdata">Mis datos</Link></li>
         <li><Link className="dropdown-item" to="./favoritos">Favoritos</Link></li>
         <li><Link className="dropdown-item" to="./compras">Compras</Link></li>
         <li><hr className="dropdown-divider"/></li>
         <li><a className="dropdown-item" href="#">Cerrar sesion</a></li>
       </ul>
     </div>
   </div>
 </div>
 
  )
}

export default Navbar

