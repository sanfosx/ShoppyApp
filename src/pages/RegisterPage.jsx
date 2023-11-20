
import { useMutation } from 'react-query'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import logoShoppyApp from '../assets/logoShoppyApp.svg'

const RegisterPage = () => {

    let navigate = useNavigate();
    const registerMutation = useMutation(async (dataUser) => {
        const response = await axios.post('https://api.escuelajs.co/api/v1/users/', dataUser
        );
        console.log('register')
        return response.data;
    },{
        onSuccess: () => {
            navigate("/login");
            
          },

        
    });

    // eslint-disable-next-line no-unused-vars
    const checkEmailAvailability = async (email) => {
        try {
            const response = await axios.post(
                'https://api.escuelajs.co/api/v1/users/is-available', { email }
            );
            console.log(response.data)
            return response.data.available;
        } catch (error) {
            console.log('Error checking email availability:', error);
        }
    };


    const handleRegister = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let email = formData.get("email").toString();
        let password = formData.get('password').toString();
        let name = formData.get('name').toString();
        let avatar = 'https://api.lorem.space/image/face?w=640&h=480&r=867'
    
        let newUser = { name, email, password, avatar }
    
        registerMutation.mutate(newUser);
    
      };



    return (
        <div className=" ">

            <form className="px-4 py-3 text-center" onSubmit={handleRegister}>
                <Link to="/"> <img className="d-block mx-auto content-logo" src={logoShoppyApp} alt="" /></Link>
                <h1 className="h3 mb-3 fw-normal">Registro</h1>
                <div className="d-grid gap-2  justify-content-sm-center">
                    <div className="form-floating ">
                        <input type="text" name="name" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>

                    <div className="form-floating ">
                        <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>
                    <div className="form-floating ">
                        <input type="email" name="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>

                    <div className="form-check text-start mt-4 mb-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Al registrarme acepto los <Link>Terminos y Condiciones</Link>
                        </label>
                    </div>
                    <button className="btn btn-dark w-100 py-2" type="submit" to="/login">{registerMutation.isLoading ? 'Registrando...' : 'Registrarse'}</button>

                    <p className="mt-5 mb-3 text-body-secondary">&copy; Codo a Codo React 2023 Comision 23643 Grupo 6</p>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
