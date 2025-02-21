import { useEffect } from "react";
import { useState } from "react";
import { CatalogView } from "./components/CatalogView";
import { CartView } from "./components/CartView";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleAddProductCart = (product) => {
        const hastItem = cartItems.find((item) => item.product.id === product.id)
        if (hastItem) {
            setCartItems(
                cartItems.map(item => {
                    if (item.product.id === product.id) {
                        item.quantity = item.quantity + 1
                        item.total = item.quantity * item.product.price
                    }
                    return item;
                }
                )
            );
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    // product:product
                    quantity: 1,
                    total: product.price
                }
            ]);
        }
    };
    const handleDeletItem = (id) => {
        setCartItems([
            ...cartItems.filter(item => item.product.id !== id)
        ]);
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