import * as actionTypes from '../action';
let defaultDate = new Date();
const initialState = {
	isLoading: false,
	loadingUsersFailed: null,
	createUserCompleted: false,
	defaultDate: defaultDate,
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
				createUserCompleted: true,
				userData: action.payload
			};
		case actionTypes.LOADING_USERS_DID_FAIL:
			return {
				...state,
				isLoading: false,
				loadingUsersFailed: action.payload
			};
		case actionTypes.USER_SELECTED_DATE:
			return {
				...state,
				defaultDate: action.date
			};

		default:
			return state;
	}
};

export default projectReducer;
