import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { PlatziAPI } from '../../src/data/ApiPlatzi';
import useAuth from '../hooks/useAuth'
import { Card, CardBody, CardImg, CardText, Spinner, Badge, Stack } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

const ProductPage = () => {
    const { state, dispatch } = useCart();
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery('ProductsDetails', () => PlatziAPI(`products/${id}`));
    const { favorites, addFavorite, removeFavorite } = useAuth();
    const [setToggleFavorite] = useState()
    const [toggleCart, setToggleCart] = useState()
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);

    const isFavorite = (productId) => favorites.some((fav) => fav.id === productId);
    const isCart = (productId) => state.cart.some((item) => item.id === productId)

    const handleToggleCart = (productId) => {
        if (isCart(productId)) {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: {
                    id: data.id,
                },
            });
            setToggleCart(false)
        } else {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    images: data.images,
                    category: data.category,
                    price: data.price, // Asegúrate de incluir el precio aquí
                    quantity: 1,
                    total: data.price,
                },
            });
            setToggleCart(true)
            setShowCartModal(true)
        }
    };
    const handleToggleFavorite = (productId) => {
        if (isFavorite(productId)) {
            removeFavorite(productId);
            setToggleFavorite(false)
        } else {
            addFavorite({
                id: productId,
                title: data.title,
                price: data.price,
                images: data.images,
                description: data.description,
                category: data.category,
            })

            setToggleFavorite(true)
        }
    };

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
                            <CardImg className="m-1" src={data.images[0]} style={{ width: '50%', maxHeight: '500px' }}></CardImg>
                            <CardText className="d-flex flex-column m-1" style={{ width: '50%' }}>
                                <Card className="p-3 border-0 " style={{ height: '500px', maxHeight: '500px' }}>
                                    <row>
                                        <div className='d-flex align-items-center'>
                                            <h1 className='flex-grow-1'>{data.title}</h1>
                                            <i className="bi bi-balloon-heart-fill text-danger fs-3" onClick={() => handleToggleFavorite(data.id)} />
                                        </div>
                                        <Stack direction="horizontal" gap={2}>
                                            <Badge bg="info" text="dark">{data.category.name}</Badge>
                                        </Stack>
                                        <h2 className='text-right'>Precio: $ {data.price}</h2>
                                    </row>
                                    <h3>Descripción:</h3>
                                    <h4 style={{ textAlign: 'justify' }}>{data.description}</h4>

                                    {/* Muestra el icono de corazón */isCart(data.id)}
                                    {toggleCart ? (

                                        <button className={isCart(data.id) ? "btn btn-danger mt-auto" : "btn btn-primary mt-auto"} onClick={() => handleToggleCart(data.id)}>Ya NO Lo Quiero :(</button>
                                    ) : (
                                        <button className={isCart(data.id) ? "btn btn-danger mt-auto" : "btn btn-primary mt-auto"} onClick={() => handleToggleCart(data.id)}>{isCart(data.id) ? "Ya NO Lo Quiero :(" : "Lo Quiero"}</button>
                                    )}
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