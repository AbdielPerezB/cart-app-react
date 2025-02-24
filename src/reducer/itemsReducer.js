
// state format:
// const state = [
//     {
//         product: {
//             id: 0,
//             name: 'string',
//             price: 1.1
//         },
//         quantity: 3,
//         total: 1
//     }
// ];

//Payload format (product):
// {
//     id: 0,
//     name: 'string',
//     price: 1.1
// }

const AddProductCart = 'AddProductCart';
const UpdateQuantityProductCart = 'UpdateQuantityProductCart';
const DeleteProductCart = 'DeleteProductCart';

export const itemsReducer = (state = [], action) => {
    //SIempre programar pensando en la inmutabilidad.
    //State i read-only, do not replace any atribute of state. 
    //Return a new object instead
    switch (action.type) {
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                    total: 1
                }
            ];
        case UpdateQuantityProductCart:
            return state.map((item) => {
                if (item.product.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            });

        case DeleteProductCart:
            return state.filter((item) => item.product.id !== action.id) //Here the payload is just the id
        default:
            return state;
    }
};