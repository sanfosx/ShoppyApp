import { useState } from 'react';
import { Modal, Button, Offcanvas } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import ItemShoppingCart from '../ItemShoppingCart';

// eslint-disable-next-line react/prop-types
const ShoppingCartModal = ({ show, onHide }) => {
    const { cart, addToCart, removeToCart } = useAuth();

    const totCantCart = () => {
        let totCant = 0
        cart.forEach(e => {
          totCant = totCant + e.cant
        });
        return totCant
      }


    return (

        <Offcanvas show={show} onHide={onHide} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <h4 className="d-flex justify-content-between align-items-center">
                        <span className="text-primary pe-3">Mi Carrito</span>
                        {totCantCart()&&
                        <span className="badge bg-primary rounded-pill">{totCantCart()}</span>}
                    </h4>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart?.map((itemCart) => (

                    <ItemShoppingCart itemCart={itemCart} key={itemCart.id} />
                ))}

            <button className="btn btn-dark botom-3">Finalizar compra</button>
            </Offcanvas.Body>
            
        </Offcanvas >

    );


};

export default ShoppingCartModal;

