import ItemShoppingCart from '../components/ItemShoppingCart';
import { useCart } from '../contexts/CartContext';

const UserShoppingPage = () => {
  const { state } = useCart();

  return (
    <div>
      <h1>Mi carrito</h1>
      {state.cart?.map((product) => (
        <ItemShoppingCart key={product.id} itemCart={product} />
      ))}
    </div>
  )
}
export default UserShoppingPage