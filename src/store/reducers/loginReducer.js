import * as actionTypes from '../action';

const initialState = {
	isLoading: false,
	loginpage: false,
	loginDidStart: false,
	loginError: null,
	loggedIn: false,
	userData: {}
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_DID_START:
			return {
				...state,
				isLoading: true,
				loginDidStart: true,
				loginError: null,
				loginpage: true
			};

		case actionTypes.LOGIN_DID_FINISH:
			return {
				...state,
				isLoading: false,
				loginDidStart: false,
				loggedIn: true,
				loginpage: false,
				userData: action.payload
			};
		case actionTypes.LOGIN_DID_FAIL:
			return {
				...state,
				isLoading: false,
				loginDidStart: false,
				loginpage: true,
				loginError: action.payload
			};
		default:
			return state;
	}
};

export default loginReducer;
