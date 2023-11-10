
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from 'react-query';
import { PlatziAPI, useCreateData } from '../../src/data/ApiPlatzi';
import AddCategoryModal from '../components/Modals/AddCategoryModal';
import '../css/Category.css'
import CategoryCard from '../components/Categories/CategoryCard';

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
                   <div className="" key={category.id}>
                        <CategoryCard category={category} key={category.id}/>
                    </div>
                ))}
            </div>
            {/*MODAL */}
            <AddCategoryModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onAddCategory={handleCreateCategory}
            />
        </div >
    );
}
export default CategoryListPage
