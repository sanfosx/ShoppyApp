import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const LayoutPage = () => {
    return (

        <div className="container-fluid">
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    )

}

export default LayoutPage

