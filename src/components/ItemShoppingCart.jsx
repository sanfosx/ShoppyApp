import { useState } from 'react'
import ImageComponent from './ImgeComponent/ImageComponent'
import { useCart } from '../contexts/CartContext';

import '../App.css'


const ItemShoppingCart = ({ itemCart }) => {

    const { state, dispatch } = useCart();
    let [cant, setCant] = useState(itemCart.quantity)
    const [item, setItem] = useState(itemCart)
    const [total , setTotal]= useState(itemCart.total)


   

    const increment = (item) => {
        setCant(++cant)
        console.log(cant,"esto es cant")
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: item.id } })
       setTotal(item.price * (cant)) 
       
    }

    const decrement = (item) => {
        if (cant > 1) {
            setCant(--cant)
            dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: item.id } })
            setTotal( item.price * (cant))
    
        }
    }

    const getTotal =(id)=>{
        state.cart.forEach((item)=>{
            if(item.id===id){
                return item.total
            }
        })
    }

    return (

        <div className="order-md-last">

            <ul className="list-group mb-1">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <ImageComponent url={itemCart.images[0]} className={"item-cart-img align-items-center justify-content-center"} />
                    <div className="p-1">
                        <h6 className="my-0">{itemCart.title}</h6>
                        <small className="text-body-secondary text-truncate">{item.description}</small>
                        <div className="d-flex flex-row align-items-center justify-content-center mt-2">

                            <button onClick={() => decrement(itemCart)} className='me-2'>-</button>
                            <h6><span>  {cant}  </span></h6>
                            <button onClick={() => increment(itemCart)} className='ms-2'>+</button>
                        </div>
                    </div>
                    <strong className="text-body-secondary">$ {total}</strong>
                    <i className=" bi bi-trash" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemCart.id } })}></i>
                </li>

            </ul>

        </div>
    )
}

export default ItemShoppingCart
