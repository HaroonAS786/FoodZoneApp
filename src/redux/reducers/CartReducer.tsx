import { ADD_TO_CART, REMOVE_CART } from "../actions";

interface CartState {
    items: any[];
}

const initialState: CartState = {
    items: [],
};

const CartReducer = (state: CartState = initialState, action: any): CartState => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case REMOVE_CART:
            return {
                ...state,
                items: state.items.filter(
                    (items) => items.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default CartReducer;