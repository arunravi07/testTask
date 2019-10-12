import * as actionTypes from '../action';
import * as LocalStore from '../../res/LocalStore';

export const createUser = getuserData => {
	return async dispatch => {
		if (!!getuserData) {
			dispatch(loadingDidStart());
			// console.log(response);

			//saving to Local Storage
			const existingData = LocalStore.getUserData();
			let data = {};
			data.user = {};
			data.user.name = {
				title: getuserData.title,
				first: getuserData.first,
				last: getuserData.last
			};
			data.user.email = getuserData.email;
			data.user.username = getuserData.username;
			data.user.password = getuserData.password;
			data.user.phone = getuserData.phone;
			data.user.dob = getuserData.dob;
			existingData.push(data);
			console.log(existingData);
			LocalStore.putUserData(existingData);
			return dispatch(usersDidLoad(existingData));
		} else {
			const error = 'No user data recieved';
			dispatch(usersDidFailToLoad(error));
		}
	};
};
export const changeDateSelected = date => {
	return async dispatch => {
		dispatch(userSelectedDate(date));
	};
};

const loadingDidStart = () => ({ type: actionTypes.LOADING_USERS_DID_START });
const usersDidFailToLoad = () => ({
	type: actionTypes.CREATE_USER_DID_FAIL,
	payload: 'error'
});
const usersDidLoad = users => ({
	type: actionTypes.CREATE_USER_DID_FINISH,
	payload: users
});
const userSelectedDate = date => ({
	type: actionTypes.CREATE_USER_SELECTED_DATE,
	date: new Date(date)
});
