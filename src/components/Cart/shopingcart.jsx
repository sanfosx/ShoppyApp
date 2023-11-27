import { createContext, useContext, useState } from "react";

//Crear contexto
export const CartContext = createContext()
//Crear provider
export function CartProvider ({ children }){
    const [cart , setcart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >=0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setcart
        }

        setcart(prestate => ([
            ... prevState, {
                ... product, 
                quantity: 1
            }
        ]))
    } 
    
    
    
    const clearCart = () => {
        setcart([])
    }

    return (
        <CartContext.Provider value = {{cart, addToCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
    
}