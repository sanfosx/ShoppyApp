import logoShoppyApp from '../assets/logoShoppyApp.svg'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className="container-fluid overflow-y-auto content-landing">
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4  content-logo" src={logoShoppyApp} alt="" />
        <h1 className="display-5 fw-bold text-body-emphasis">ShoppyApp</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Hola de nuevo! Descubre miles de productos y servicios al alcance de tu PC, Tablet o Celular. Guarda tus favoritos, realiza un regalo o programa una entrega, eso y mucho mas a un click de distancia... 🎇</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link type="button" className="btn btn-dark btn-lg px-4 gap-3" to="/login">Autenticarme</Link>
            <Link type="button" className="btn btn-outline-primary btn-lg px-4 gap-3" to="/catalogo">Ver Catalogo</Link>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
