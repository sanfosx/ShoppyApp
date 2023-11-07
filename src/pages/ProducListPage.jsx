
import { useQuery} from 'react-query';
import PlatziAPI from '../../src/data/ApiPlatzi';

import { useDeleteData} from '../../src/data/ApiPlatzi';



const ProductListPage = () => {


  const { data, isLoading, isError, error, refetch } = useQuery('products', () => PlatziAPI('products'));

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
        <button className="btn btn-dark">+ Agregar</button>
      </div>
      
        <div className="d-flex flex-wrap align-content-center justify-content-center mr-2">
          {data?.map((product) => (
            <div className="card m-2" style={{maxWidth: '600px'}} key= {product.id}>
            <div className="row g-0">
              <div className="col-md-6">
              <img src={product.images[0]} className="img-fluid rounded m-2" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                 
                  <h1 className="">${product.price}</h1>
                  <p className="card-text"><small className="text-body-secondary">{product.category.name}</small></p>
                  <button className="btn btn-primary">Lo Quiero</button>
                  <button className="btn btn-link">Mas info</button>
                  <i className="bi bi-heart text-danger"></i>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    
  );
}

export default ProductListPage
