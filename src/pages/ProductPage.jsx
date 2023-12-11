
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import {PlatziAPI} from '../../src/data/ApiPlatzi';
import { Card, CardBody, CardImg, CardText, Spinner, Badge , Stack} from 'react-bootstrap';

const ProductPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery('ProductsDetails', () => PlatziAPI(`products/${id}`));



    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Spinner animation="border" variant="primary" role="status">
        </Spinner></div>;
    }

    if (isError) {
        return <div>Error: {error}</div>;
    }
    
    return (
        <div className='container-content'>

            {data ?
                <Card className="ml-auto mt-2 border-0 bg-light " >
                <Card.Title className="m-2">
                        <row className="d-flex justify-content-end ">
                        <button className="btn btn-dark" onClick={() => navigate(-1)}>Volver atras</button>
                        </row>
                </Card.Title>
                <CardBody className='border-0'>

                    <div className='d-flex '>

                        <CardImg  className="m-1" src={data.images[0]} style={{ width: '50%' , maxHeight: '500px'}}></CardImg>
                        <CardText className="d-flex flex-column m-1" style={{ width: '50%' }}>
                            <Card className="p-3 border-0 " style={{ height: '500px',  maxHeight: '500px'}}> 
                            <row> 
                            <div className='d-flex align-items-center'>
                            <h1 className='flex-grow-1'>{data.title}</h1>

                            <i className="bi bi-balloon-heart-fill text-danger fs-3" onClick={console.log("debo agregar a favoritos")/*() => handleToggleFavorite(product.id)*/} />
                            </div>
                            <Stack direction="horizontal" gap={2}>
                            <Badge bg="info" text="dark">{data.category.name}</Badge>
                            </Stack>
                            <h2 className='text-right'>Precio: $ {data.price}</h2>
                            </row>
                            <h3>Descripción:</h3>
                            <h4 style={{ textAlign: 'justify' }}>{data.description}</h4>
                            <button className="btn btn-primary mt-auto">Lo Quiero</button>
                            </Card> 

                        </CardText>
                    </div>
                    
                    </CardBody>
                    
                </Card>
                : <></>
            }
        </div>
    );
}

export default ProductPage