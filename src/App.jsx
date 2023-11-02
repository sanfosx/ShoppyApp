import { Routes, Route } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import './index.css'
import LandingPage from './pages/LandingPage'
import Category from './components/Categories/Category'
import Product from './components/Products/Product'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

function App() {

  return (
    <Routes>
       <Route path="/" element={<LandingPage />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/register" element={<Register />}></Route>
      <Route element={<LayoutPage />} >
        <Route path="/categorias" element={<Category />}></Route>
        <Route path="/Products" element={<Product />}></Route>
      </Route>
    </Routes>
  )
}
export default App