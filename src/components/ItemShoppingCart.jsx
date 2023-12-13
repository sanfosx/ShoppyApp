import { useState, useEffect } from 'react'
import ImageComponent from './ImgeComponent/ImageComponent'
import useAuth from '../hooks/useAuth'

import '../App.css'


const ItemShoppingCart = ({ itemCart }) => {
    const { updateCart, removeToCart } = useAuth()
    const [cant, setCant] = useState(itemCart.cant? itemCart.cant : 1)
    const [price, setPrice] = useState(itemCart.price)

    
    
    const increment = (item) => {
        setCant(cant + 1)
        updateCart(item)
        setPrice(cant * item.price)

    }

    const decrement = (item) => {
        if (cant > 1) {
            setCant(cant - 1)
            updateCart(item, -1)
            setPrice(cant * item.price)
        }
    }    

    return (

        <div className="order-md-last">

            <ul className="list-group mb-1">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <ImageComponent url={itemCart.images[0]} className={"item-cart-img align-items-center justify-content-center"} />
                    <div className="p-1">
                        <h6 className="my-0">{itemCart.title}</h6>
                        <small className="text-body-secondary text-truncate">{itemCart.description}</small>
                        <div className="d-flex flex-row align-items-center justify-content-center mt-2">

                            <button onClick={() => decrement(itemCart)} className='me-2'>-</button>
                            <h6><span>  {cant}  </span></h6>
                            <button onClick={() => increment(itemCart)} className='ms-2'>+</button>
                        </div>
                    </div>
                    <strong className="text-body-secondary">$ {price}</strong>
                    <i className=" bi bi-trash" onClick={()=> removeToCart(itemCart.id)}></i>
                </li>

            </ul>

        </div>
    )
}

export default ItemShoppingCart
