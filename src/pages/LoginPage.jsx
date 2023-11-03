import logoShoppyApp from '../assets/logoShoppyApp.svg'
import {Link} from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className=" ">
           
            <form className="px-4 py-5 text-center">
                <Link to="/"> <img className="d-block mx-auto content-logo" src={logoShoppyApp} alt="" /></Link>
                <h1 className="h3 mb-3 fw-normal">Iniciar sesion</h1>
                <div className="d-grid gap-3  justify-content-sm-center">
                    <div className="form-floating ">
                        <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <Link className="text-end" to="/forgotpassword">Olvidaste tu datos?</Link>
                    <Link className="btn btn-dark w-100 py-2" type="submit" to="/catalogo">Validar</Link>
                    <p>No tienes una cuenta? Registrate <Link to="/register">aqui</Link></p>

                    <p className="mt-5 mb-3 text-body-secondary">&copy; Codo a Codo React 2023 Comision 23643 Grupo 6</p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
/*<div className="">


</div>*/