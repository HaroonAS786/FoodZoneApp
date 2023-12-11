
export const USER_TOKEN = 'USER_TOKEN';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const LOGOUT = 'LOGOUT';

export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const SIGN_UP = 'auth/SIGN_UP';
export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const CONTINUE_SESSION = 'auth/CONTINUE_SESSION';

// Action Creators
export const setUserData = (payload: any) => ({ type: SET_USER_DATA, payload });
export const signUp = (payload: any) => ({ type: SIGN_UP, payload });
export const signIn = (payload: any) => ({ type: SIGN_IN, payload });
export const signOut = () => ({ type: SIGN_OUT });
export const continueSession = (payload: any) => ({ type: CONTINUE_SESSION, payload });

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
