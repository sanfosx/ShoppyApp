
import { Link } from 'react-router-dom'
import {useState} from 'react'
import '../../css/Product.css'
import ImageComponent from '../ImgeComponent/ImageComponent'
import DeleteProductModal from '../Modals/DeleteProductModal'
import EditProductModal from '../Modals/EditProductModal'
import { useEditProduct, useDeleteProduct } from '../../data/ApiPlatzi'
const ProductCard = ({ product }) => {

  const [addFavorites, setAddFavorites] = useState()
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);


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
                <i className="bi bi-heart text-danger"></i>
              </div>
              <p className="card-text"><small className="text-body-secondary">{product.category.name}</small></p>


              <p className="card-text " >{product.description}</p>


              <h1 className="">${product.price}</h1>

              <div className="d-flex justify-content-between">
                <Link className="btn btn-link" to={`/products/${product.id}`}>Mas detalles</Link>
                <button className="btn btn-primary">Lo Quiero</button>
              </div>

            </div>
          </div>
        </div>

         {/*MODAL */}

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

