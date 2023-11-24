
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import {PlatziAPI} from '../../src/data/ApiPlatzi';
import { Card, CardBody, CardHeader, CardImg, CardText, Col, Row , Spinner, Badge , Stack} from 'react-bootstrap';

const ProductPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery('ProductsDetails', () => PlatziAPI(`products/${id}`));



    if (isLoading) {
        return <div><Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner></div>;
    }

    if (isError) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='container-content'>

            {data ?
                <Card className="ml-auto mt-2" >
                <Card.Title className="m-2">
                        <row className="d-flex justify-content-end ">
                        <button className="btn btn-dark" onClick={() => navigate(-1)}>Volver atras</button>
                        </row>
                </Card.Title>
                <CardBody>
                    
                    <div className='d-flex '>

                        <CardImg  className="m-1" src= {data.images[0]} style={{ width: '50%' }}></CardImg>
                        <CardText className="d-flex flex-column m-1" style={{ width: '50%' }}>
                            <Card> 
                            <row>  
                            <h1>{data.title}</h1> 
                            <Stack direction="horizontal" gap={2}>
                            <Badge bg="info" text="dark">{data.category.name}</Badge>
                            </Stack>
                            <h2 className='text-right'>Price: </h2>
                            <h2>$ {data.price}</h2>
                            </row>
                            <h3>Descriptions:</h3>
                            <h4>{data.description}</h4>
                            <button className="btn btn-primary">Lo Quiero</button>
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
