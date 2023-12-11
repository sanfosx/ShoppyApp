import { useState } from 'react';
import  AddProductModal  from '../components/Modals/AddProductModal';
import { useQuery } from 'react-query';
import { PlatziAPI, useCreateProduct } from '../../src/data/ApiPlatzi';
import ProductCard from '../components/Products/ProductCard';
import  useAuth  from '../hooks/useAuth'

const ProductListPage = () => {
  
  const { user, favorites, addFavorite, removeFavorite } = useAuth();
   const isFavorite = (productId) => favorites.some((fav) => fav.id === productId);

  const [showProductModal, setShowProductModal] = useState(false);
  const { data, isLoading, isError, error, refetch } = useQuery('Products', () => PlatziAPI('products'));
  
  //CREATE
  const createCategoryMutation = useCreateProduct();
  const handleCreateProduct = async (newProduct) => {

    console.log('que tiene newdata', newProduct)
    await createCategoryMutation.mutateAsync(newProduct); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    refetch();
  };


  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container-fluid'>
      <div className="product-list-title">
        <h1>Lista de Productos</h1>
        <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setShowProductModal(true)}>+ Agregar</button>
      </div>
      <div className="d-flex flex-wrap align-content-center justify-content-center mr-2">

        {data?.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        
      </div>

      {/*MODAL */}
      <AddProductModal
        show={showProductModal}
        onHide={() => setShowProductModal(false)}
        onAddProduct={handleCreateProduct}
      />

    </div>

  );


}

export default ProductListPage





/*  <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row" />
        <div className="col-md-10">
          <div className="row p-2 bg-white border rounded mt-2">
            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/HO8e9b8.jpg" /></div>
            <div className="col-md-6 mt-1">
              <h5>Quant tinor shirts</h5>
              <div className="d-flex flex-row">
                <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>110</span>
              </div>
              
              <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
            </div>
            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
              <div className="d-flex flex-row align-items-center">
                <h4 className="mr-1">$15.99</h4><span className="strike-text">$21.99</span>
              </div>
              <h6 className="text-success">Free shipping</h6>
              <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
            </div>
          </div>
        </div>
      </div> */