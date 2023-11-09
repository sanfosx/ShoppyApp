import { useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query';
import { PlatziAPI, useCreateProduct } from '../../src/data/ApiPlatzi';
import AddProductModal from '../components/Modals/AddProductModal';



const CategoryPage = () => {

    
    const [showProductModal, setShowProductModal] = useState(false);
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading, isError, error, refetch } = useQuery('CategoriesProducts', () => PlatziAPI(`categories/${id}/products`));
    const { state } = useLocation()
   
console.log(state)
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
        <div className='container-content'>
            <button className="btn btn-dark" onClick={() => navigate(-1)}>Volver atras</button>
            <h1>Categoria {state.categoryName} </h1>
            <button className="btn btn-dark" onClick={() => setShowProductModal(true)} >+ Agregar producto</button>
            <br />
            <br />
            <div className="d-flex flex-wrap align-content-center justify-content-center mr-2">
                {console.log('esto es data: ', data)}
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

export default CategoryPage
