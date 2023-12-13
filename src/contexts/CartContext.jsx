
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de un CartProvider');
    }
    return context;
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
    };

    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                return {
                    ...state,
                    cart: [...state.cart, action.payload],

                };

            case 'REMOVE_FROM_CART':
                return {
                    ...state,
                    cart: state.cart.filter((product) => product.id !== action.payload.id),
                };

            case 'INCREMENT_QUANTITY':
                return {
                    ...state,
                    cart: state.cart.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantity: product.quantity + 1, total: (product.quantity + 1) * product.price }
                            : product
                    ),
                };

            case 'DECREMENT_QUANTITY':
                return {
                    ...state,
                    cart: state.cart.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantity: Math.max(1, product.quantity - 1), total: Math.max(1, product.quantity - 1) * product.price }
                            : product,

                    ),

                };

            case 'CLEAR_CART':
                return {
                    ...state,
                    cart: [],
                };

            case 'LOAD_CART':
                return {
                    ...state,
                    cart: action.payload,
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Cargar el estado del carrito desde localStorage al inicio
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            dispatch({ type: 'LOAD_CART', payload: savedCart });
        }
    }, []);

    // Guardar el estado del carrito en localStorage cada vez que cambia
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
