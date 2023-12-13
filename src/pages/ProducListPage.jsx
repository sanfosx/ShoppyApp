import { useState } from 'react';
import AddProductModal from '../components/Modals/AddProductModal';
import { useQuery } from 'react-query';
import { PlatziAPI, useCreateProduct } from '../../src/data/ApiPlatzi';
import ProductCard from '../components/Products/ProductCard';

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
          <ProductCard key={product.id} product={product} />
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