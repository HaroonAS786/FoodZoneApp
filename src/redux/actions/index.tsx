
export const USER_TOKEN = 'USER_TOKEN';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const LOGOUT = 'LOGOUT';

export const saveUserToken = (data: any) => ({
    type: USER_TOKEN,
    payload: data,
});

export const addToCart = (item: any) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeCart = (id: string) => ({
    type: REMOVE_CART,
    payload: id,
});
