import * as actionTypes from '../action';
import loginApi from '../../networking/apis/login/loginApi';
import * as LocalStore from '../../res/LocalStore';

export const loginRequest = getuserData => {
	return async dispatch => {
		if (!!getuserData) {
			dispatch(loginDidStart());

			const response = await loginApi();
			// console.log("started", response);
			if (response.data) {
				// console.log(response);
				if (
					response.data.username === getuserData.username &&
					response.data.password === getuserData.password
				) {
					//saving to Local Storage
					LocalStore.putLoginData(response.data.username);

					dispatch(loginDidFinish(response.data.username));
				} else {
					const error = 'Credentials does not Match';
					dispatch(loginDidFail(error));
				}
			}
		} else {
			const error = 'No user data recieved';
			dispatch(loginDidFail(error));
		}
	};
};
export const logoutRequest = () => {
	return async dispatch => {
		LocalStore.logout();
		const logoutSuccessMsg = 'Logout Success';
		dispatch(logout(logoutSuccessMsg));
	};
};

const loginDidStart = () => ({ type: actionTypes.LOGIN_DID_START });
const loginDidFail = errMsg => ({
	type: actionTypes.LOGIN_DID_FAIL,
	payload: errMsg
});
const loginDidFinish = user => ({
	type: actionTypes.LOGIN_DID_FINISH,
	payload: user
});
const logout = logoutSuccessMsg => ({
	type: actionTypes.LOGOUT,
	payload: logoutSuccessMsg
});
