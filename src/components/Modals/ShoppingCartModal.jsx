import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const ShoppingCartModal = ({ show, onHide, onAddCategory }) => {
    const [productName, setCategoryName] = useState('');
    const [productImage, setCategoryImage] = useState('');

    const handleAddCategory = () => {
        const newCategory = {
            name: productName,
            image: productImage,
        };

        onAddCategory(newCategory);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Carrito de compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h1>Mi carrito de compras 100</h1>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>
                    Cerrar
                </Button>
                <Button variant="dark" onClick={handleAddCategory}>
                    Concretar compra
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShoppingCartModal;