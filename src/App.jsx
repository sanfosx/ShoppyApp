import { Routes, Route } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import LandingPage from './pages/LandingPage'
import Product from './components/Products/Product'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import AboutPage from './pages/AboutPage'
import ProductListPage from './pages/ProducListPage'
import CategoryListPage from './pages/CategoryListPage'

function App() {

  return (
    <Routes>
       <Route path="/" element={<LandingPage />}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
       <Route path="/register" element={<RegisterPage />}></Route>
       <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
      <Route element={<LayoutPage />} >
        <Route path="/categorias" element={<CategoryListPage />}></Route>
        <Route path="/Products" element={<Product />}></Route>
        <Route path="/catalogo" element={<ProductListPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Route>
    </Routes>
  )
}
export default App