import { CatalogView } from "./components/CatalogView";
import { CartView } from "./components/CartView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    const { cartItems, handleAddProductCart, handleDeletItem } = useItemsCart();

    return (
        <>
            <NavBar />
            <div className="container">
                <h3 className="my-2">Cart App</h3>

                <CartRoutes
                    cartItems={cartItems}
                    handleAddProductCart={handleAddProductCart}
                    handleDeletItem = {handleDeletItem}
                />
            </div>
        </>
    );
};