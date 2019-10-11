import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteConfig from '../routes/RouteConfig';
import Layout from '../components/Layout/Layout';
import Users from '../pages/Users/Users';
import Login from '../pages/Login/Login';
import CreateUser from '../pages/CreateUser/CreateUser';
import NotFound from '../pages/404/404';
import { connect } from 'react-redux';
import * as LocalStore from '../res/LocalStore';

class AppRoute extends Component {
	render() {
		return (
			<Layout isLoggedIn={LocalStore.isLoggedIn()}>
				{LocalStore.isLoggedIn() ? (
					<Switch>
						<Route
							exact
							path={RouteConfig.createUser.path}
							component={CreateUser}
						/>
						<Route
							exact
							path={RouteConfig.users.path}
							component={Users}
						/>
						<Route
							exact
							path={RouteConfig.login.path}
							component={Login}
						/>
						<Route exact={true} path="/" component={Users} />
						<Route
							exact
							path={RouteConfig.error404.path}
							component={NotFound}
						/>
					</Switch>
				) : (
					<Switch>
						<Route exact path="*" component={Login} />
					</Switch>
				)}
			</Layout>
		);
	}
}

const mapStatetoProps = state => {
	return {
		isLoggedIn: state.login.loggedIn
	};
};
export default connect(mapStatetoProps)(AppRoute);
