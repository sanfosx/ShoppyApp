import { Routes, Route } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import './index.css'
import LandingPage from './pages/LandingPage'
import Category from './components/Categories/Category'
import Product from './components/Products/Product'
import CataloguePage from './pages/CataloguePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'

function App() {

  return (
    <Routes>
       <Route path="/" element={<LandingPage />}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
       <Route path="/register" element={<RegisterPage />}></Route>
       <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
      <Route element={<LayoutPage />} >
        <Route path="/categorias" element={<Category />}></Route>
        <Route path="/Products" element={<Product />}></Route>
        <Route path="/catalogo" element={<CataloguePage />}></Route>
      </Route>
    </Routes>
  )
}
export default App