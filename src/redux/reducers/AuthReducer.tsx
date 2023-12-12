import { AuthState } from "../../utils/types";
import { CONTINUE_SESSION, SET_USER_DATA, SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions";

const initialState: AuthState = {
	userData: {},
	isLoading: true,
	isLogged: false,
	userToken: '',
};

const AuthReducer = (state: AuthState = initialState, action: any): AuthState => {
	switch (action.type) {
		
		case SET_USER_DATA:
			return {
				...state,
				userData: action.payload,
			};

		case SIGN_UP:

			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload,
			};

		case SIGN_IN:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload,
				userData: action.payload,
			};

		case SIGN_OUT:
			return {
				...state,
				isLoading: false,
				isLogged: false,
				userToken: '',
				userData: {},
			};

		case CONTINUE_SESSION:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload,
			};

		default:
			return state;
	}
};

export default AuthReducer;
