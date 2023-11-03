import { Link } from 'react-router-dom'
import logoShoppyApp from '../assets/logoShoppyApp.svg'

const RegisterPage = () => {
    return (
        <div className=" ">

            <form className="px-4 py-3 text-center">
                <Link to="/"> <img className="d-block mx-auto content-logo" src={logoShoppyApp} alt="" /></Link>
                <h1 className="h3 mb-3 fw-normal">Registro</h1>
                <div className="d-grid gap-2  justify-content-sm-center">
                    <div className="form-floating ">
                        <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>

                    <div className="form-floating ">
                        <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>
                    <div className="form-floating ">
                        <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>

                    <div className="form-check text-start mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                               Al registrarme acepto los <Link>Terminos y Condiciones</Link>
                            </label>
                    </div>
                    <Link className="btn btn-dark w-100 py-2" type="submit" to="/login">Registrarme</Link>

                    <p className="mt-5 mb-3 text-body-secondary">&copy; Codo a Codo React 2023 Comision 23643 Grupo 6</p>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
