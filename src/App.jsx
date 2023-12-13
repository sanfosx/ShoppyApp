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
import CataloguePage from './pages/CataloguePage'
import UserFavoritePage from './pages/UserFavoritePage'
import UserShoppingPage from './pages/UserShoppingPage'
import UserDataPage from './pages/UserDataPage'
import AuthProvider from './contexts/AuthContext'
import UserBuysPage from './pages/UserBuysPage'
import { CartProvider } from './contexts/CartContext'

function App() {

  return (
    <AuthProvider>
      <CartProvider>
    <Routes>
       <Route path="/" element={<LandingPage />}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
       <Route path="/register" element={<RegisterPage />}></Route>
       <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
      <Route element={<LayoutPage />} >
        <Route path="/categorias" element={<CategoryListPage />}></Route>
        <Route path="/categorias/:id" element={<CategoryPage />}></Route>
        <Route path="/catalogo" element={<CataloguePage />}></Route>
        <Route path="/products" element={<ProductListPage />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/favoritos" element={<UserFavoritePage />}></Route>
        <Route path="/userdata" element={<UserDataPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/cart" element={<UserShoppingPage/>}></Route>
        <Route path="/compras" element={<UserBuysPage/>}></Route>
      </Route>
    </Routes>
    </CartProvider>
    </AuthProvider>
  )
}
export default App