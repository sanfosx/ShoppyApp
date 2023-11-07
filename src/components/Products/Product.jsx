import { useState, useEffect } from 'react'
//import { getProducts } from '../../Firebase/FirebaseMethods'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/FirebaseConfig'
import {Link} from 'react-router-dom'


const Product = () => {

  const [products, setProducts] = useState([])

  const productsCollection = collection(db, 'Products')

  const getProducts = async () => {

    const data = await getDocs(productsCollection)

    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    console.log(products)

  }


  useEffect(() => {

    getProducts()

  }, []);



  return (
    <div className='category-list-content'>
      <table className="table table table-responsive table-hover">
        <thead className="table-light">
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Cant. Vendida</th>
            <th>Ult. Cambio</th>
            <th className="text-end">#</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key= {product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.stock}</td>
              <td>{product.stock}</td>
              <td className="text-end">
                <Link to={`edit/${product.id}`} className="btn btn-light">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => console.log('clicked')}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Product

