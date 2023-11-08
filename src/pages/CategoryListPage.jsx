
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import PlatziAPI from '../../src/data/ApiPlatzi';




const CategoryListPage = () => {
    const { data, isLoading, isError, error } = useQuery('Categories', () => PlatziAPI('categories'));



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
                    <Link to={`/categorias/${category.id}`} state={{ categoryName: category.name }} key={category.id}>
                        <div className=" d-flex card text-bg-dark g-col-4 m-2" style={{ width: '20rem' }} >

                            <img src={category.image} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">{category.name}</h5>

                            </div>

                        </div>
                    </Link>

                ))}

            </div>


        </div>
    );
}

export default CategoryListPage
