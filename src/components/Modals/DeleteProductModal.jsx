import { Modal, Button} from 'react-bootstrap';
import { useDeleteProduct } from '../../data/ApiPlatzi';
import {useQuery} from 'react-query'
import { PlatziAPI } from '../../data/ApiPlatzi';

// eslint-disable-next-line react/prop-types
const DeleteProductModal = ({ show, onHide, onDeleteProduct, productId }) => {
   
//console.log(productId)
   //ELIMINAR
  const deleteProductMutation = useDeleteProduct();
  const { refetch } = useQuery('Products', () => PlatziAPI('products'));
  

  const handleDeleteProduct = async (productId) => {
    await deleteProductMutation.mutateAsync(`products/${productId}`); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    refetch();
    onHide()
  };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Producto {productId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <i className="bi bi-exclamation-octagon"></i>

            <p>Estas seguro de eliminar, esta accion no se puede revertir</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={()=> handleDeleteProduct(productId)}>
                   Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteProductModal;
