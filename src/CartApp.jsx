import { useEffect, useReducer } from "react";
import { CatalogView } from "./components/CatalogView";
import { CartView } from "./components/CartView";
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
export const CartApp = () => {

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

    return (
        <>
            <div className="container">
                <h3 className="my-2">Cart App</h3>
                <CatalogView handle={product => handleAddProductCart(product)} />
                {/* el primer producto es el "evento por así decirlo que recibe el padre del hijo,
                    después ese mismo evento se pasa por parámetro a la función" */}

                {cartItems?.length <= 0 ||
                    (
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handleDeleteItem={(id) => handleDeletItem(id)} />
                        </div>
                    )
                    //cartItems? -> significa 'si cartItems es distinto a null'
                    //.length <= 0 ->'y además su longitu es menor o igual a cero'
                    // 'entonces no muestres nada o si no se cumple muestra el comonente div'
                }
            </div>
        </>
    );
};