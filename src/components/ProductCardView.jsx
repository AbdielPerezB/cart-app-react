import { useNavigate } from "react-router-dom";

export const ProductCardView = ({ handle, product: { id, name, description, price } }) => {
    const navigate = useNavigate()
    const onAddProduct = (product) => {
        console.log(product)
        handle(product)
        navigate('/cart')
    };
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddProduct({id, name, price, description})}
                        // onClick={() => onAddProduct({id: id, name: name, price:price, description:description})}
                    >Agregar</button>
                </div>
            </div>
        </>
    );
};
