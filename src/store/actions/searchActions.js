import {
	SEARCH_LOADING_LIST,
	SEARCH_LIST_DID_LOAD,
	SEARCH_LIST_DID_FAIL_TO_LOAD
} from '../action';

export const searchInRedux = searchText => {
	return async (dispatch, getState) => {
		const state = getState();
		dispatch(loadingDidStart());

		let searchData = state.users.userData.filter(data => {
			let name = `${data.user.name.first} ${data.user.name.last}`;
			let email = `${data.user.email}`;

			return (
				name.toLowerCase().includes(searchText.toLowerCase()) ||
				email.toLowerCase().includes(searchText.toLowerCase())
			);
		});

		if (searchData.error) return dispatch(listDidFailToLoad());

		return dispatch(listDidLoad(searchData));
	};
};

const listDidFailToLoad = searchData => ({
	type: SEARCH_LIST_DID_FAIL_TO_LOAD
});
const listDidLoad = searchData => ({
	type: SEARCH_LIST_DID_LOAD,
	payload: searchData
});
const loadingDidStart = () => ({ type: SEARCH_LOADING_LIST });
