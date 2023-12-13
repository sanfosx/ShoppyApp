import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const EditCategoryModal = ({ show, onHide, onEditCategory, category }) => {
    const [productName, setCategoryName] = useState(category.name);
    const [productImage, setCategoryImage] = useState(category.image);

    const handleEditCategory = () => {
        const updateCategory = {
            name: productName,
            image: productImage,
        };

        onEditCategory(category.Id, updateCategory);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="categoryName">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre de la categoria"
                            value={productName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="categoryImage">
                        <Form.Label>URL de la Imagen</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la URL de la imagen"
                            value={productImage}
                            onChange={(e) => setCategoryImage(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>
                    Cerrar
                </Button>
                <Button variant="dark" onClick={handleEditCategory}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditCategoryModal;