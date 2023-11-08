import { Routes, Route } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import AboutPage from './pages/AboutPage'
import ProductListPage from './pages/ProducListPage'
import CategoryListPage from './pages/CategoryListPage'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'

function App() {

  return (
    <Routes>
       <Route path="/" element={<LandingPage />}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
       <Route path="/register" element={<RegisterPage />}></Route>
       <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
      <Route element={<LayoutPage />} >
        <Route path="/categorias" element={<CategoryListPage />}></Route>
        <Route path="/categorias/:id" element={<CategoryPage />}></Route>
       
        <Route path="/catalogo" element={<ProductListPage />}></Route>
        <Route path="/products" element={<ProductListPage />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Route>
    </Routes>
  )
}
export default App