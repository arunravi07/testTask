import { combineReducers } from 'redux';

import loginReducer from './reducers/loginReducer';
import usersReducer from './reducers/usersReducer';
import createUserReducer from './reducers/createUserReducer';

const reducers = combineReducers({
	login: loginReducer,
	users: usersReducer,
	createUser: createUserReducer
});

export default reducers;
