import  useAuth  from '../hooks/useAuth'
import ProductCard from '../components/Products/ProductCard';
import ItemShoppingCart from '../components/ItemShoppingCart';

const UserShoppingPage = () => {
  const {  cart } = useAuth();


  return (
    <div>
      <h1>Mi carrito</h1>
      {cart?.map((product) => (
          <ItemShoppingCart key={product.id} itemCart={product}/>
        ))}
    </div>
  )
}

export default UserShoppingPage