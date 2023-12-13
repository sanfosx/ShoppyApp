import logoShoppyApp from '../assets/logoShoppyApp.svg'
import { Link, useNavigate, /*useLocation*/ } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import axios from 'axios'
import { useMutation } from 'react-query'

const LoginPage = () => {

    let navigate = useNavigate();
    let auth = useAuth();

    const signinMutation = useMutation((data) => {

        return axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
    },
        {
            onSuccess: (data) => {
                const userData = {
                    access_token: data.data.access_token,
                };
                auth.signin(userData, () => {
                    navigate("/catalogo");
                });
            },
        });

    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let email = formData.get("email").toString();
        let password = formData.get('password').toString();
        let newUser = { email, password }
        signinMutation.mutate(newUser)
    }

    return (
        <div className=" ">
            <form className="px-4 py-5 text-center" onSubmit={handleSubmit}>
                <Link to="/"> <img className="d-block mx-auto content-logo" src={logoShoppyApp} alt="" /></Link>
                <h1 className="h3 mb-3 fw-normal">Iniciar sesion</h1>
                <div className="d-grid gap-3  justify-content-sm-center">
                    <div className="form-floating ">
                        <input type="email" name="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <Link className="text-end" to="/forgotpassword">Olvidaste tu datos?</Link>
                    <button className="btn btn-dark w-100 py-2" type="submit" to="/catalogo">{signinMutation.isLoading ? 'Cargando' : 'Login'}</button>
                    <p>No tienes una cuenta? Registrate <Link to="/register">aqui</Link></p>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; Codo a Codo React 2023 Comision 23643 Grupo 6</p>
                </div>
            </form>
        </div>
    )
}
export default LoginPage
