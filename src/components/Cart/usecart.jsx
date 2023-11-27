import { useContext } from "react";
import { CartContext } from "./shopingcart";

export const useCart = ()  => {
        const context = useContext(CartContext)

        if ( context === undefined){
            throw new Error('usecart must be used within a Cartprovider')
        }
        return context
}