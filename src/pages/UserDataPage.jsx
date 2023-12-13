import useAuth from '../hooks/useAuth';
import '../css/Userdata.css'
import ImageComponent from '../components/ImgeComponent/ImageComponent';

const UserDataPage = () => {

    let {userProfile} = useAuth();
    console.log(userProfile)
    return (
      
      <div class="d-flex align-items-center justify-content-center m-3">
                <div class="card profile-card-3 ">
    		        <div class="background-block">
                        <img src="https://img.freepik.com/foto-gratis/cielo-nubes-sol-fondo-manana-azul-cielo-pastel-blanco-foco-suave-foco-luz-solar-resumen-borrosa-cian-degradado-naturaleza-pacifica-abrir-vista-fuera-ventanas-primavera-verano-hermoso_1253-1092.jpg" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src={userProfile.avatar} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Nombre: {userProfile.name}</h2>
                    <h2>Mail: {userProfile.email}</h2>
                    <h2>Role: {userProfile.role}</h2>
                    <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                    </div>
                </div>
            </div>
    



    )
}

export default UserDataPage
