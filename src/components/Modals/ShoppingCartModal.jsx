import { Offcanvas } from 'react-bootstrap';
import ItemShoppingCart from '../ItemShoppingCart';
import { useCart } from '../../contexts/CartContext';

// eslint-disable-next-line react/prop-types
const ShoppingCartModal = ({ show, onHide }) => {
    const { state, dispatch } = useCart();
   
    const totCantCart = () => {
        let totCant = 0
        state.cart.forEach(e => {
            totCant = totCant + e.quantity
        });
        return totCant
    }

    return (

        <Offcanvas show={show} onHide={onHide} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <h4 className="d-flex justify-content-between align-items-center">
                        <span className="text-primary pe-3">Mi Carrito</span>
                        {totCantCart() &&
                            <span className="badge bg-primary rounded-pill">{totCantCart()}</span>}
                    </h4>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {state.cart?.map((itemCart) => (

                    <ItemShoppingCart itemCart={itemCart} key={itemCart.id} />
                ))}

                <button onClick={() => dispatch({ type: 'CLEAR_CART' })} className="btn btn-light botom-3">Vaciar Carrito</button>
                <button className="btn btn-dark botom-3">Finalizar compra</button>
            </Offcanvas.Body>
        </Offcanvas >
    );
};
export default ShoppingCartModal;

