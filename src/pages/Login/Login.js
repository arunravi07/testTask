import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux_';
import './Login.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { loginRequest } from '../../store/actions/loginAction';
import PreLoader from '../../components/PreLoader/PreLoader';
import * as LocalStore from '../../res/LocalStore';

class Login extends Component {
	handleSubmit = (event, values) => {
		event.persist();
		// console.log(values);
		this.props.loginRequest(values);
	};
	componentDidMount() {
		LocalStore.isLoggedIn()
			? this.props.history.push('/')
			: this.props.history.push('/login');
	}

	render() {
		return (
			<Aux>
				{this.props.isLoading && <PreLoader />}
				<div className="container-fluid d-flex justify-content-center">
					<div className="Cards Login">
						<h1 className="textCenter">LOGIN</h1>
						<AvForm onValidSubmit={this.handleSubmit}>
							<AvField
								name="username"
								label="Username : "
								type="text"
								errorMessage="Enter a valid username"
								validate={{
									required: {
										value: true,
										errorMessage: 'Enter a valid username'
									},
									minLength: {
										value: 4,
										errorMessage: 'Min 4 chars.'
									}
								}}
								placeholder="Enter username"
							/>
							<AvField
								name="password"
								label="Password : "
								type="password"
								errorMessage="Enter a valid password"
								validate={{
									required: {
										value: true,
										errorMessage: 'Enter a valid Password'
									},
									minLength: {
										value: 4,
										errorMessage: 'Min 4 chars.'
									}
								}}
								placeholder="Enter Password"
							/>
							{this.props.isLoggedIn.loginError ? (
								<div className="form-group">
									<div className="invalid-feedback">
										{this.props.isLoggedIn.loginError}
									</div>
								</div>
							) : (
								''
							)}
							<div className="textCenter">
								<button className="AppBtn">LOGIN</button>
							</div>
						</AvForm>
					</div>
				</div>
			</Aux>
		);
	}
}

const mapStatetoProps = state => {
	// console.log(state);
	return { isLoggedIn: state.login, isLoading: state.login.isLoading };
};
export default connect(
	mapStatetoProps,
	{ loginRequest }
)(Login);
