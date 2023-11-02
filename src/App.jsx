import { Routes, Route } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import './index.css'
import LandingPage from './pages/LandingPage'
import Category from './components/Categories/Category'
import Product from './components/Products/Product'

function App() {

  return (
    <Routes>
      <Route element={<LayoutPage />} >
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/categorias" element={<Category />}></Route>
        <Route path="/Products" element={<Product />}></Route>
      </Route>
    </Routes>
  )
}
export default App