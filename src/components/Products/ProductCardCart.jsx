import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../css/Product.css'
import ImageComponent from '../ImgeComponent/ImageComponent'
import DeleteProductModal from '../Modals/DeleteProductModal'
import EditProductModal from '../Modals/EditProductModal'
import { useEditProduct, useDeleteProduct } from '../../data/ApiPlatzi'
import  useAuth  from '../../hooks/useAuth'
import ShoppingCartModal from '../Modals/ShoppingCartModal'

const ProductCardCart = ({ product }) => {

  const { user, favorites, addFavorite, removeFavorite, cart, addToCart, removeToCart } = useAuth();
  const [toggleFavorite, setToggleFavorite] = useState()
  const [toggleCart, setToggleCart] = useState()
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const isFavorite = (productId) => favorites.some((fav) => fav.id === productId);
  const isCart = (productId) => cart.some((item) => item.id === productId)

  const handleToggleCart = (productId) => {
    if (isCart(productId)) {
      removeToCart(productId);
      setToggleCart(false)
    } else {
      addToCart({ 
        id: productId,
        title: product.title,
        price: product.price,
        images: product.images,
        description: product.description,
        category: product.category,
        cant: 1

         /* otras propiedades del producto */ });
      setToggleCart(true)
    }
  };

  const handleToggleFavorite = (productId) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
      setToggleFavorite(false)
    } else {
      addFavorite({ 
        id: productId,
        title: product.title,
        price: product.price,
        images: product.images,
        description: product.description,
        category: product.category,

         /* otras propiedades del producto */ });
      setToggleFavorite(true)
    }
  };

  //ELIMINAR
  const deleteProductMutation = useDeleteProduct();
  const handleDeleteProduct = async (productId) => {
    await deleteProductMutation.mutateAsync(`products/${productId}`); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    //refetch();
  };

  //EDITAR
  const editProductMutation = useEditProduct();

  const handleEditProduct = async (productId, updateData) => {
    try {
      await editProductMutation.mutateAsync({ productId, ...updateData });
      // Manejar el éxito, como redirigir a la página de detalles del producto, mostrar un mensaje, etc.
    } catch (error) {
      // Manejar el error, como mostrar un mensaje de error, enviar a un servicio de registro, etc.
    }
  };

  return (
    
    <div className="m-3" key={product.id} >
        <div className="d-flex flex-columns justify-content-between align-items-center" style={{ width: '100%' , height: '200px'}}>
            <div className="p-2 align-items-center"  style={{ maxWidth: '300px', minWidth: '300px'}}>
                <img src={product.images[0]} className="img-fluid p-1" style={{ width: '150px' , height: '100px', borderRadius: '10px'}}/>
            </div>
            <div className="p-2 align-items-center"  style={{ maxWidth: '200px', minWidth: '200px'}}>
                <h2>{product.title}</h2>
            </div>
            <div className="p-2 align-items-center"  style={{ maxWidth: '200px', minWidth: '200px'}}>
                <h2>${product.price}</h2>
            </div>

            <div className="p-2 align-items-center d-flex flex-columns"  style={{ maxWidth: '200px', minWidth: '200px'}}>
              <button className="btn btn-light" onClick={() => handleDecrement(product.id)}>-</button>
                <h2 className="p-3 m-1">{product.cant}</h2>
                <button className="btn btn-light" onClick={() => handleIncrement(product.id)}>+</button>

            </div>

            <div className="p-2 align-items-center"  style={{ maxWidth: '200px', minWidth: '200px'}}>
                <Link className="btn btn-link" to={`/products/${product.id}`}>Mas detalles</Link>
            </div>
        
            <div className="p-2 align-items-center"  style={{ maxWidth: '300px', minWidth: '300px'}}> 
                <div className="d-flex justify-content-between">
                <div className="bi bi-x text-danger" style={{ fontSize: '4em' }}  onClick={() => handleToggleCart(product.id)}></div>
                
                </div>
            </div>
        </div>



      {/*MODAL */}

      <ShoppingCartModal
      show={showCartModal}
      onHide={() => setShowCartModal(false)}
      
      
      />
      

      <DeleteProductModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onDeleteProduct={handleDeleteProduct}
        // eslint-disable-next-line react/prop-types
        productId={product.id}
      />

      <EditProductModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        onEditProduct={handleEditProduct}
        // eslint-disable-next-line react/prop-types
        product={product}
      />
    </div>

  )
}

export default ProductCardCart

