import { products } from "../data/products";

export const getProducts = () => {
    return products;
};

export const calculateTotal = (items) => {
    return items.reduce((acumulator, item) => acumulator + item.product.price * item.quantity, 0)
};