import  useAuth  from '../hooks/useAuth'
import ProductCardCart from '../components/Products/ProductCardCart';

const UserShoppingPage = () => {
  const {  cart } = useAuth();

  const total = cart?.map(item => item.price * item.cant).reduce((acc, val) => acc + val, 0);


  return (
    <div>
      <h1>Mis Compras</h1>
      <div  style={{ minHeight: '500px' }}>
      {cart?.map((product) => (
          <ProductCardCart key={product.id} product={product}/>
        ))}

        {total > 0 ? (
        <div className="d-flex flex-row m-1  justify-content-center " >
          <div className=' mx-3'><h1>Total</h1></div>
          <div className=' mx-3'><h1>{total}</h1></div>
          <div className=' mx-3'><button className='btn btn-success' ><h3>Pagar</h3></button></div>
        </div>
      ) : null}

    </div>
    </div>
  )
}

export default UserShoppingPage