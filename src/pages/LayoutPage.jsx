import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const LayoutPage = () => {
    return (

        <div className="content-main"> 
        <Navbar />
            <div className="container">
                
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    )

}

export default LayoutPage

