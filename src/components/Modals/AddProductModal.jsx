// AddProductModal.js
import { useState } from 'react';
import { useQuery } from 'react-query';
import { PlatziAPI } from '../../data/ApiPlatzi';
import { Modal, Button, Form, FormControl } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const AddProductModal = ({ show, onHide, onAddProduct, idCategory = null }) => {

    const { data } = useQuery('categories', () => idCategory ? PlatziAPI(`categories/${idCategory}`) : PlatziAPI('categories'))

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: [''],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleImageChange = (index, value) => {
        const newImages = [...product.images];
        newImages[index] = value;
        setProduct((prevProduct) => ({ ...prevProduct, images: newImages }));
    };

    const handleAddProduct = () => {
        // Remove empty image links before adding the product
        const filteredImages = product.images.filter((image) => image.trim() !== '');
        const newProduct = { ...product, images: filteredImages };

        onAddProduct(newProduct);
        onHide();
    };

    const handleAddImageField = () => {
        setProduct((prevProduct) => ({ ...prevProduct, images: [...prevProduct.images, ''] }));
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Título del Producto</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Ingrese el título del producto"
                            value={product.title}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Precio del Producto</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            placeholder="Ingrese el precio del producto"
                            value={product.price}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción del Producto</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            placeholder="Ingrese la descripción del producto"
                            value={product.description}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="categoryId">
                        <Form.Label>Categoría del Producto</Form.Label>
                        <Form.Control
                            as="select"
                            name="categoryId"
                            value={product.categoryId}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>Seleccione una categoría</option>
                            {data?.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="images">
                        <Form.Label>Enlaces de Imágenes</Form.Label>
                        {product.images.map((image, index) => (
                            <div key={index} className="mb-3">
                                <FormControl
                                    placeholder="Ingrese el enlace de la imagen"
                                    value={image}
                                    onChange={(e) => handleImageChange(index, e.target.value)}
                                />
                                {index === product.images.length - 1 && (
                                    <Button variant="outline-secondary" onClick={handleAddImageField}>
                                        +
                                    </Button>
                                )}
                            </div>
                        ))}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleAddProduct}>
                    Agregar Producto
                </Button>
            </Modal.Footer>
        </Modal>

    );
};

export default AddProductModal;