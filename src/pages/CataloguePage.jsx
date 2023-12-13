import {PlatziAPI} from '../../src/data/ApiPlatzi';
import { Link } from 'react-router-dom'
import ProductCard from '../components/Products/ProductCard';
import { useQuery } from 'react-query';

const CataloguePage = () => {
  
  const { data, isLoading, isError, error } = useQuery('products', () => PlatziAPI('products', 10, 10));

 /* const deleteProductMutation = useDeleteData();


  // eslint-disable-next-line no-unused-vars
  const handleDeleteProduct = async (productId) => {
    await deleteProductMutation.mutateAsync(`products/${productId}`); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    refetch();
  };*/

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container-fluid'>
      <div className="product-list-title">
        <h1>Ultimos lanzamientos</h1>
      </div>
      <div className="d-flex flex-wrap align-content-center justify-content-center mr-2">
          {data?.map((product) => (
           <ProductCard key={product.id} product={product}/>
          ))}
        </div>
    
    </div>

  );

}

export default CataloguePage
