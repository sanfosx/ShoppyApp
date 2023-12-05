import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddProductModal from '../Modals/AddProductModal'
import { useCreateProduct, useDeleteCategory } from '../../data/ApiPlatzi';
import DeleteCategoryModal from '../Modals/DeleteCategoryModal';
import ImageComponent from '../ImgeComponent/ImageComponent';
{/*eslint-disable-next-line react/prop-types*/ }
const CategoryCard = ({ category }) => {

  const [showProductModal, setShowProductModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //CREATE
  const createCategoryMutation = useCreateProduct();
  const handleCreateProduct = async (newProduct) => {

    console.log('que tiene newdata', newProduct)
    await createCategoryMutation.mutateAsync(newProduct); // Usar mutacion asincrona

  };


   //ELIMINAR
  const deleteCategoryMutation = useDeleteCategory();
  const handleDeleteCategory = async (categoryId) => {
    await deleteCategoryMutation.mutateAsync(`categories/${categoryId}`); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    //refetch();
  };



  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card category-card">
            <div className="category-background"></div>
            {/*eslint-disable-next-line react/prop-types*/}
            <ImageComponent url={category.image} className="card-img-top category-image" />
            
            <div className="category-details">
              {/*eslint-disable-next-line react/prop-types*/}
              <Link className="card-text text-light p-3" to={`/categorias/${category.id}`} state={{ categoryName: category.name }}>
                {/*eslint-disable-next-line react/prop-types*/}
                <h1 className="card-title">{category.name}</h1>
              </Link>
            </div>

            <div className="category-actions">

              <button type="button" className="btn btn-light mx-1 rounded-circle">
                <i className="bi bi-pencil h-100"></i>
              </button>
              <button onClick={() => setShowDeleteModal(true)} type="button" className="btn btn-danger mx-1 rounded-circle">
                <i className="bi bi-trash"></i>
              </button>
              <button onClick={() => setShowProductModal(true)} type="button" className="btn btn-dark mx-1 rounded-circle">
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*MODAL */}

      <DeleteCategoryModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onDeleteCategory={handleDeleteCategory} />

      <AddProductModal
        show={showProductModal}
        onHide={() => setShowProductModal(false)}
        onAddProduct={handleCreateProduct}
        // eslint-disable-next-line react/prop-types
        categoryId={category.id}
      />

      
    </div>
  )
}

export default CategoryCard
