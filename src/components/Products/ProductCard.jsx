
import { Link } from 'react-router-dom'
import '../../css/Product.css'
import { useCart } from '../Cart/usecart'

const ProductCard = ({ product }) => {



  return (
    <div className=" m-3  product-card" key={product.id}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={product.images[0]} className="img-fluid rounded m-2 product-image" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body d-flex flex-column justify-content-around product-card-body mx-3 px-2 py-4 my-3">
            <div className="d-flex justify-content-between">
              <h3 className="card-title">{product.title}</h3>
              <i className="bi bi-heart text-danger"></i>
            </div>
            <p className="card-text"><small className="text-body-secondary">{product.category.name}</small></p>

           
            <p className="card-text " >{product.description}</p>
           

            <h1 className="">${product.price}</h1>

            <div className="d-flex justify-content-between">
              <Link className="btn btn-link" to={`/products/${product.id}`}>Mas detalles</Link>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>Lo Quiero</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

