import { Modal, Button} from 'react-bootstrap';
import { useDeleteCategory } from '../../data/ApiPlatzi';

// eslint-disable-next-line react/prop-types
const DeleteCategoryModal = ({ show, onHide, onDeleteCategory, categoryId }) => {
   
//console.log(categoryId)
   //ELIMINAR
  const deleteCategoryMutation = useDeleteCategory();
  

  const handleDeleteCategory = async (categoryId) => {
    await deleteCategoryMutation.mutateAsync(`categories/${categoryId}`); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    //refetch();
    onHide()
  };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Categoria {categoryId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <i className="bi bi-exclamation-octagon"></i>

            <p>Estas seguro de eliminar, esta accion no se puede revertir</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={()=> handleDeleteCategory(categoryId)}>
                   Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteCategoryModal;


/*

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
*/