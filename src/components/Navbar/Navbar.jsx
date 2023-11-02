import logoShoppyApp from '../../assets/logoShoppyApp.svg'

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
  
 <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={logoShoppyApp} alt="fuck" width="40" height="40" className="d-inline-block align-text-top"/>
      ShoppyApp
    </Link>
  </div>
</nav>


  
  )
}

export default Navbar
