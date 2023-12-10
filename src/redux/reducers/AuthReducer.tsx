import { setData } from "../../utils/storage";
import { AuthState } from "../../utils/types";
import { USER_TOKEN } from "../actions";

const initialState: AuthState = {
	userToken: '',
};

const AuthReducer = (state: AuthState = initialState, action: any): AuthState => {
	switch (action.type) {
		case USER_TOKEN:
			setData("accessToken", action.payload.token)
			return {
				...state,
				userToken: action.payload,
			};
		default:
			return state; // Use the current state as the default case
	}
};

export default AuthReducer;
