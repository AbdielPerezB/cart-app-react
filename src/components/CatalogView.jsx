import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handle }) => {
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            setProducts(getProducts)
        }, [] //Esto hace que solo se aplique una sola vez despues que el componente se renderize
    );
    return (
        <>
            <div className="row">
                {
                    products.map(product => (
                        <div className="col-4 my-2" key={product.id}>
                            <ProductCardView
                                product={product}
                                handle={(product) => handle(product)}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
