
import { useState } from 'react';
import  AddProductModal  from '../components/Modals/AddProductModal';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom'
import { PlatziAPI, useCreateProduct, useDeleteData } from '../../src/data/ApiPlatzi';



const ProductListPage = () => {

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





  const deleteProductMutation = useDeleteData();

  // eslint-disable-next-line no-unused-vars
  const handleDeleteProduct = async (productId) => {
    await deleteProductMutation.mutateAsync(`products/${productId}`); // Usar mutacion asincrona

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
          <div className="card m-2" style={{ maxWidth: '600px' }} key={product.id}>
            <div className="row g-0">
              <div className="col-md-6">
                <img src={product.images[0]} className="img-fluid rounded m-2" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>

                  <h1 className="">${product.price}</h1>
                  <p className="card-text"><small className="text-body-secondary">{product.category.name}</small></p>
                  <button className="btn btn-primary">Lo Quiero</button>
                  <Link className="btn btn-link" to={`/products/${product.id}`}>Mas info</Link>
                  <i className="bi bi-heart text-danger"></i>
                </div>
              </div>
            </div>
          </div>
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