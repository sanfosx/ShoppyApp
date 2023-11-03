import logoShoppyApp from '../../assets/logoShoppyApp.svg'

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
  
 
 <div className=" border-bottom py-3 mx-3">
   <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     
     <Link classNameName=" d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none" to="/">
       <img src={logoShoppyApp} alt="fuck" width="40" height="40" className="d-inline-block align-text-top"/>
       
     </Link>
     
 
     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
       
       <li><a href="#" className="nav-link px-2 link-body-emphasis">Catalogo</a></li>
       <li><a href="#" className="nav-link px-2 link-body-emphasis">Productos</a></li>
       <li><a href="#" className="nav-link px-2 link-body-emphasis">Categorias</a></li>
       <li><a href="#" className="nav-link px-2 link-secondary">Quienes Somos</a></li>
     </ul>
 
     <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-top" role="search">
       <input type="search" className="form-control" placeholder="buscar..." aria-label="Search"/>
     </form>
 
     <div className="dropdown text-end">
       <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
       </a>
       <ul className="dropdown-menu text-small">
         <li><a className="dropdown-item" href="#">Mis datos</a></li>
         <li><a className="dropdown-item" href="#">Favoritos</a></li>
         <li><a className="dropdown-item" href="#">Compras</a></li>
         <li><hr className="dropdown-divider"/></li>
         <li><a className="dropdown-item" href="#">Cerrar sesion</a></li>
       </ul>
     </div>
   </div>
 </div>
 
  )
}

export default Navbar

