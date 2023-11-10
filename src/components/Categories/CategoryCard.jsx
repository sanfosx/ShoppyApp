import {Link}  from 'react-router-dom'
{/*eslint-disable-next-line react/prop-types*/}
const CategoryCard = ( {category} ) => {


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card category-card">
            <div className="category-background"></div>
            {/*eslint-disable-next-line react/prop-types*/}
            <img src={category.image} alt="Category Image" className="card-img-top category-image" />
            <div className="category-details">
              {/*eslint-disable-next-line react/prop-types*/}
              <Link className="card-text text-light p-3" to={`/categorias/${category.id}`} state={ {categoryName: category.name}}>
              <h1 className="card-title">{category.name}</h1>
              </Link>
            </div>
          
            <div className="category-actions">
            
              <button type="button" className="btn btn-light mx-1 rounded-circle">
                <i className="bi bi-pencil"></i>
              </button>
              <button type="button" className="btn btn-danger mx-1 rounded-circle">
                <i className="bi bi-trash"></i>
              </button>
              <button type="button" className="btn btn-dark mx-1 rounded-circle">
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
