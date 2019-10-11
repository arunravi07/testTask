export const putLoginData = token => {
	window.localStorage.setItem('username', JSON.stringify(token));
	window.localStorage.setItem('isLoggedIn', true);
};

export const isLoggedIn = () => {
	return window.localStorage.getItem('isLoggedIn');
};

export const getLoginData = () => {
	let data = {};
	try {
		data = JSON.parse(window.localStorage.getItem('username'));
	} catch (e) {
		data = undefined;
	}
	return data;
};

export const putUserData = token => {
	window.localStorage.setItem('userData', JSON.stringify(token));
};

export const getUserData = () => {
	let data = {};
	try {
		data = JSON.parse(window.localStorage.getItem('userData'));
	} catch (e) {
		data = undefined;
	}
	return data;
};

export const logout = () => {
	window.localStorage.removeItem('isLoggedIn');
	window.localStorage.removeItem('username');
	window.localStorage.removeItem('userData');
};
