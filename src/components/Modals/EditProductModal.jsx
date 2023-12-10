import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const EditProductModal = ({ show, onHide, onEditProduct, product }) => {
    const [productName, setProductName] = useState(product.title);
    const [productImage, setProductImage] = useState(product.image);

    const handleEditProduct = () => {
        const updateProduct = {
            name: productName,
            image: productImage,
        };

        onEditProduct(product.id, updateProduct);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="categoryName">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre de la categoria"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="categoryImage">
                        <Form.Label>URL de la Imagen</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la URL de la imagen"
                            value={productImage}
                            onChange={(e) => setProductImage(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>
                    Cerrar
                </Button>
                <Button variant="dark" onClick={handleEditProduct}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditProductModal;