import * as actionTypes from '../action';
const initialState = {
	isLoading: false,
	loadingUsersFailed: null,
	userData: {}
};

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOADING_USERS_DID_START:
			return {
				...state,
				isLoading: true
			};
		case actionTypes.LOADING_USERS_DID_FINISH:
			return {
				...state,
				isLoading: false,
				userData: action.payload
			};
		case actionTypes.LOADING_USERS_DID_FAIL:
			return {
				...state,
				isLoading: false,
				loadingUsersFailed: action.payload
			};

		default:
			return state;
	}
};

export default projectReducer;
