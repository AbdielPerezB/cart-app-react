export const CartView = ({ handleDeleteItem, items }) => {
    // const { product, quantity, total } = cartItems;
    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                     <th>Cantidad</th>
                        <th>Total</th>
                        <th>ELiminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(({product: {id, name, price}, quantity}) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{quantity}</td>
                                <td>{price*quantity}</td>
                                <td><button className="btn btn-danger" onClick={() => handleDeleteItem(id)}>ELimnar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">$1234</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};
