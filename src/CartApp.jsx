import { useEffect } from "react";
import { useState } from "react";
import { CatalogView } from "./components/CatalogView";
import { CartView } from "./components/CartView";

const initialCartItems = [
    // {
    //     product: {
    //         id: 1,
    //         name: '',
    //         description: '',
    //         price: ''
    //     },
    //     quantity: 0,
    // }
]

export const CartApp = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const handleAddProductCart = (product) => {
        // const itemRepeted
        setCartItems([
            ...cartItems,
            {
                product,
                // product:product
                quantity: 1,
                total: product.price*1
            }
        ]);
    };

    return (
        <>
            <div className="container">
                <h3 className="my-2">Cart App</h3>
                <CatalogView handle={product => handleAddProductCart(product)} />
                    {/* el primer producto es el "evento por así decirlo que recibe el padre del hijo,
                    después ese mismo evento se pasa por parámetro a la función" */}
                <div className="my-4 w-50">
                    <CartView items={cartItems}/>
                </div>
            </div>
        </>
    );
};