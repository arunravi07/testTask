import {
	LOADING_USERS_DID_START,
	LOADING_USERS_DID_FINISH,
	LOADING_USERS_DID_FAIL
} from '../action';
import * as LocalStore from '../../res/LocalStore';

import UsersApi from '../../networking/apis/users/usersApi';

//add data to redux state & localstore from api
export const loadUser = () => {
	return async (dispatch, getState) => {
		dispatch(loadingDidStart());

		const response = await UsersApi();
		if (typeof response !== 'undefined') {
			LocalStore.putUserData(response.results);
			return dispatch(usersDidLoad(response.results));
		}
		if (response.error) {
			//console.log("error");
			return dispatch(usersDidFailToLoad());
		}
	};
};

//add data to redux state from localstore
export const putUserData = localstoreData => {
	return async (dispatch, getState) => {
		dispatch(loadingDidStart());

		const response = localstoreData;

		if (localstoreData.length <= 0) {
			//console.log("Empty Data");
			return dispatch(usersDidFailToLoad());
		}
		return dispatch(usersDidLoad(response));
	};
};

const loadingDidStart = () => ({ type: LOADING_USERS_DID_START });
const usersDidFailToLoad = () => ({
	type: LOADING_USERS_DID_FAIL,
	payload: 'error'
});
const usersDidLoad = users => ({
	type: LOADING_USERS_DID_FINISH,
	payload: users
});
