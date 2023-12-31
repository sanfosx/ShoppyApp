import logoShoppyApp from '../../assets/logoShoppyApp.svg'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {

  const { state } = useCart();
  let navigate = useNavigate()
  let auth = useAuth();

  const getTotalQuantity = () => {
    return state.cart.reduce((total, product) => total + product.quantity, 0);
  };

  const cerrarSesion = () => {
    auth.signout(() => {
      navigate("/login")
    })
  }

  return (

    <div className=" border-bottom py-3 mx-3 ">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <Link className=" d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none" to="/">
          <img src={logoShoppyApp} alt="fuck" width="40" height="40" className="d-inline-block align-text-top" />
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="./catalogo" className="nav-link px-2 link-body-emphasis">Catalogo </Link></li>
          <li><Link to="./products" className="nav-link px-2 link-body-emphasis">Productos </Link></li>
          <li><Link to="./categorias" className="nav-link px-2 link-body-emphasis">Categorias</Link></li>
          <li><Link to="about" className="nav-link px-2 link-secondary">Quienes Somos</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-top" role="search">
          <input type="search" className="form-control" placeholder="buscar..." aria-label="Search" />
        </form>

        {auth.isLoggedIn
          ? <div className="dropdown text-end d-flex align-items-center justify-content-center">

            {getTotalQuantity() > 0 ?
              <Link className="position-relative m-0 p-0" to="cart">
                <i className="bi bi-cart fs-2  me-4"></i>
                <span className="position-absolute top-50 start-50 translate-middle badge rounded-pill bg-danger">
                  {getTotalQuantity()}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
              : <></>

            }

            <a className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {auth.userProfile.avatar
                ? <img src={auth.userProfile.avatar} alt="mdo" width="32" height="32" className="rounded-circle" />

                : <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              }
            </a>

            <ul className="dropdown-menu text-small">
              <li className="text-center">{auth.userProfile.name}</li>
              <li><Link className="dropdown-item" to="./userdata">Mis datos</Link></li>
              <li><Link className="dropdown-item" to="./favoritos">Favoritos</Link></li>
              <li><Link className="dropdown-item" to="./compras">Compras</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" onClick={cerrarSesion}>Cerrar sesion</a></li>
            </ul>
          </div>
          : <Link className="btn btn-dark" to="/login">Login</Link>}
      </div>
    </div>
  )
}

export default Navbar

