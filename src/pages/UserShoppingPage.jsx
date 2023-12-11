import  useAuth  from '../hooks/useAuth'
import ProductCard from '../components/Products/ProductCard';

const UserShoppingPage = () => {
  const {  cart } = useAuth();


  return (
    <div>
      <h1>Mis Favoritos</h1>
      {cart?.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default UserShoppingPage