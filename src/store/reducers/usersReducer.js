import * as actionTypes from '../action';
const initialState = {
	isLoading: false,
	loadingUsersFailed: null,
	userData: {},
	displayData: {},
	searchInRedux: {}
};

const usersReducer = (state = initialState, action) => {
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
				userData: action.payload,
				displayData: action.payload,
				searchTerm: '',
				searchInRedux: []
			};
		case actionTypes.LOADING_USERS_DID_FAIL:
			return {
				...state,
				isLoading: false,
				loadingUsersFailed: action.payload
			};
		case actionTypes.SEARCH_LOADING_LIST:
			return { ...state, isLoading: true };
		case actionTypes.SEARCH_LIST_DID_FAIL_TO_LOAD:
			return { ...state, isLoading: false };
		case actionTypes.SEARCH_LIST_DID_LOAD:
			// console.log(action);
			return {
				...state,
				searchInRedux: action.payload,
				displayData: action.payload,
				isLoading: false
			};

		default:
			return state;
	}
};

export default usersReducer;
