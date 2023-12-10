
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import {PlatziAPI} from '../../src/data/ApiPlatzi';
import ImageComponent from '../components/ImgeComponent/ImageComponent';


const ProductPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery('ProductsDetails', () => PlatziAPI(`products/${id}`));



    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (isError) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='container-content'>

            {data ?
                <div key={data.id}>
                    <button className="btn btn-dark" onClick={() => navigate(-1)}>Volver atras</button>
                    <h1> {id}- {data.title} </h1>
                    <ImageComponent url={data.images[0]} className="rounded mx-auto d-block"/>
                   
                    <h2>$ {data.price}</h2>
                    <p>{data.description}</p>
                    <p>Creado el : {data.creationAt}</p>
                    <p>Ultima Actualizacion : {data.updatedAt}</p>
                    <button className="btn btn-dark" onClick={() => navigate(-1)}>Volver atras</button>
                   
                </div>
                : <></>
            }
        </div>
    );
}

export default ProductPage
