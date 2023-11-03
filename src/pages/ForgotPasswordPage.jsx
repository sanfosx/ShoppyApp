
import logoShoppyApp from '../assets/logoShoppyApp.svg'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
    return (
        <div className="" >

            <form className="px-4 py-5 text-center">
                <Link to="/"> <img className="d-block mx-auto content-logo" src={logoShoppyApp} alt="" /></Link>
                <h1 className="h3 mb-3 fw-normal">Restablecer cuenta </h1>
                <div className="d-grid gap-3  justify-content-sm-center">
                    <div className="form-floating ">
                        <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <p className=""> *** Te enviaremos nuevas credenciales para que puedas acceder, recuerda <br/>verificar 
                    tu correo no deseado si no lo recibes en la bandeja de entrada 😜 </p>

                    <Link className="btn btn-dark w-100 py-2" type="submit" to="/login">Enviar Credenciales</Link>


                    <p className="mt-5 mb-3 text-body-secondary">&copy; Codo a Codo React 2023 Comision 23643 Grupo 6</p>
                </div>
            </form>
        </div>
    )
}

export default ForgotPasswordPage
