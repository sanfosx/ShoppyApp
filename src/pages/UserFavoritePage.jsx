
import  useAuth  from '../hooks/useAuth'
import ProductCard from '../components/Products/ProductCard';

const UserFavoritePage = () => {
  const { user, favorites, addFavorite, removeFavorite } = useAuth();


  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favorites?.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default UserFavoritePage
