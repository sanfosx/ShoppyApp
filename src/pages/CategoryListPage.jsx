
import { useQuery } from 'react-query';
import PlatziAPI from '../../src/data/ApiPlatzi';
import { useDeleteData, useCreateData } from '../../src/data/ApiPlatzi';



const CategoryListPage = () => {
    const { data, isLoading, isError, error, refetch } = useQuery('Categories', () => PlatziAPI('categories'));

    //CREATE
    const createCategoryMutation = useCreateData();
    
    const handleCreateCategory = async () => {
        const newCategory = {
            name: categoryName,
            image: categoryImg,
        };

        console.log('que tiene newdata', newCategory)
        await createCategoryMutation.mutateAsync(newCategory); // Usar mutacion asincrona

        // Después de eliminar, volver a cargar los datos
        refetch();

    };

    //ELIMINAR
    const deleteCategoryMutation = useDeleteData();
    const handleDeleteCategory = async (categoryId) => {
        await deleteCategoryMutation.mutateAsync(`categories/${categoryId}`); // Usar mutacion asincrona

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
                <button className="btn btn-dark">+ Agregar</button>
            </div>
            <div className='d-flex flex-wrap align-content-center justify-content-center'>
                {data?.map((category) => (
                    <div className=" d-flex card text-bg-dark g-col-4 m-2" style={{ width: '20rem' }} key={category.id}>
                        <img src={category.image} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">{category.name}</h5>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default CategoryListPage
