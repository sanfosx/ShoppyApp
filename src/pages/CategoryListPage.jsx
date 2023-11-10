
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from 'react-query';
import { PlatziAPI, useCreateData } from '../../src/data/ApiPlatzi';
import AddCategoryModal from '../components/Modals/AddCategoryModal';
import '../css/Category.css'



const CategoryListPage = () => {

    const [showModal, setShowModal] = useState(false);

    const { data, isLoading, isError, error, refetch } = useQuery('categories', () => PlatziAPI('categories'));



    //CREATE
    const createCategoryMutation = useCreateData();
    const handleCreateCategory = async (newCategory) => {

        console.log('que tiene newdata', newCategory)
        await createCategoryMutation.mutateAsync(newCategory); // Usar mutacion asincrona

        // Después de eliminar, volver a cargar los datos
        refetch();

    };


    //CARGA
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (isError) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="category-list-container">
            <div className="category-list-title">
                <h1>Categorias</h1>
                <button className="btn btn-dark" onClick={() => setShowModal(true)}>+ Agregar</button>
            </div>
            <div className='d-flex flex-wrap align-content-center justify-content-center'>
                {data?.map((category) => (
                    <Link to={`/categorias/${category.id}`} state={{ categoryName: category.name }} key={category.id}>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card category-card">
                                        <div className="category-background"></div>
                                        <img src={category.image} alt="Category Image" className="card-img-top category-image" />
                                        <div className="category-details">
                                            <h2 className="card-title">{category.name}</h2>
                                        </div>
                                        <div className="category-actions">
                                            <button type="button" className="btn btn-light mx-1 rounded-circle">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            <button type="button" className="btn btn-danger mx-1 rounded-circle">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                            <button type="button" className="btn btn-dark mx-1 rounded-circle">
                                                <i className="bi bi-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                ))}

        </div>

            {/*MODAL */ }
    <AddCategoryModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onAddCategory={handleCreateCategory}
    />







        </div >
    );
}

export default CategoryListPage
