import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";


const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems)

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
        //sessionStorage guarda solo string, por ello debemos convertir el objeto js de itmes a string
    }, [cartItems]);

    const handleAddProductCart = (product) => {

        const hastItem = cartItems.find((item) => item.product.id === product.id)
        if (hastItem) {
            dispatch(
                {
                    type: 'UpdateQuantityProductCart',
                    payload: product
                }
            );
        } else {
            dispatch(
                {
                    type: 'AddProductCart',
                    payload: product
                }
            );
        }
    };
    const handleDeletItem = (id) => {
        dispatch(
            {
                type: 'DeleteProductCart',
                id
            }
        );
    };

    return { //Es un objeto js
        cartItems,
        handleAddProductCart,
        handleDeletItem
    };
};