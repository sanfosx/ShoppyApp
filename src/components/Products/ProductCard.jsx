
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../css/Product.css'
import ImageComponent from '../ImgeComponent/ImageComponent'
import DeleteProductModal from '../Modals/DeleteProductModal'
import EditProductModal from '../Modals/EditProductModal'
import { useEditProduct, useDeleteProduct } from '../../data/ApiPlatzi'
import  useAuth  from '../../hooks/useAuth'
import ShoppingCartModal from '../Modals/ShoppingCartModal'

const ProductCard = ({ product }) => {

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
      setShowCartModal(true)
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
        cant:1,

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
    <div className=" m-3  product-card" key={product.id}>
      <div className="row g-0">
        <div className="col-md-6">



          <div className=" category-card">

            {/*eslint-disable-next-line react/prop-types*/}
            <ImageComponent url={product.images[0]} className="img-fluid rounded m-2 product-image" />

            <div className="category-actions">

              <button type="button" className="btn btn-light mx-1 rounded-circle">
                <i className="bi bi-pencil h-100" onClick={() => setShowEditModal(true)}></i>
              </button>
              <button onClick={() => setShowDeleteModal(true)} type="button" className="btn btn-danger mx-1 rounded-circle">
                <i className="bi bi-trash"></i>
              </button>

            </div>
          </div>


        </div>
        <div className="col-md-6">
          <div className="card-body d-flex flex-column justify-content-around product-card-body mx-3 px-2 py-4 my-3">
            <div className="d-flex justify-content-between">
              <h3 className="card-title">{product.title}</h3>

              {/* Muestra el icono de corazón */isFavorite(product.id)}
              {toggleFavorite? (
                
                <i className={isFavorite(product.id)? "bi bi-balloon-heart-fill text-danger fs-3": "bi bi-balloon-heart text-danger fs-3"} onClick={() => handleToggleFavorite(product.id)} />
              ) : (
                <i className={isFavorite(product.id)? "bi bi-balloon-heart-fill text-danger fs-3": "bi bi-balloon-heart text-danger fs-3"} onClick={() => handleToggleFavorite(product.id)} />
              )}

            </div>
            <p className="card-text"><small className="text-body-secondary">{product.category.name}</small></p>


            <p className="card-text " >{product.description}</p>


            <h1 className="">${product.price}</h1>

            <div className="d-flex justify-content-between">
              <Link className="btn btn-link" to={`/products/${product.id}`}>Mas detalles</Link>

               {/* Muestra el icono de corazón */isCart(product.id)}
               {toggleCart? (
                
                <button className={isCart(product.id)? "btn btn-danger":"btn btn-primary" } onClick={() => handleToggleCart(product.id)}>Ya NO Lo Quiero :(</button>
              ) : (
                <button className={isCart(product.id)? "btn btn-danger":"btn btn-primary"}  onClick={() => handleToggleCart(product.id) }>{isCart(product.id)?"Ya NO Lo Quiero :(":"Lo Quiero"}</button>
              )}
             
            </div>

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

export default ProductCard

