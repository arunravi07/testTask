import React, { Component } from 'react';
import Aux from '../../hoc/Aux_';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { createUser } from '../../store/actions/createUserAction';
import './CreateUser.css';

class CreateUser extends Component {
	state = {
		defaultDate: new Date()
	};
	handleSubmit = (event, values) => {
		event.persist();
		console.log(values);
		this.props.createUser(values);
	};
	defaultDate = new Date();
	// DatePicker
	handleDefault = date => {
		// this.setState((nextState) { defaultDate: date });
		// console.log(date);
		// return this.state.defaultDate;
	};
	componentDidUpdate() {
		if (this.props.createUser) {
			console.log(this.props);
			this.props.history.push('/users');
		}
	}
	render() {
		console.log(this.props);
		return (
			<Aux>
				<div className="LoginWrapper d-flex align-items-center justify-content-center">
					<div className="Cards Login">
						<h1 className="textCenter">CREATE USER</h1>
						<AvForm onValidSubmit={this.handleSubmit}>
							<AvField
								type="select"
								name="title"
								label="Title"
								validate={{
									required: {
										value: true,
										errorMessage: 'Select a valid Title'
									}
								}}
							>
								<option defaultValue>Mr</option>
								<option>Mrs</option>
								<option>Miss</option>
								<option>Ms</option>
							</AvField>
							<AvField
								name="first"
								label="First Name : "
								type="text"
								errorMessage="Enter a valid First Name"
								validate={{
									required: {
										value: true,
										errorMessage: 'Enter a valid First Name'
									},
									minLength: {
										value: 3,
										errorMessage: 'Min 3 chars.'
									}
								}}
								placeholder="Enter First Name"
							/>
							<AvField
								name="last"
								label="Last Name : "
								type="text"
								errorMessage="Enter a valid Last Name"
								validate={{
									required: {
										value: true,
										errorMessage: 'Enter a valid Last Name'
									},
									minLength: {
										value: 2,
										errorMessage: 'Min 2 chars.'
									}
								}}
								placeholder="Enter Last Name"
							/>
							<AvField
								name="email"
								label="E-Mail : "
								type="email"
								errorMessage="Invalid Email"
								validate={{
									required: { value: true },
									email: { value: true }
								}}
								placeholder="Enter Email"
							/>

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
							<div className="form-group">
								<label>DOB</label>
								<div>
									<DatePicker
										name="dob"
										className="form-control"
										selected={this.state.defaultDate}
										onChange={this.handleDefault}
									/>
								</div>
							</div>
							<AvField
								name="phone"
								label="Phone : "
								type="tel"
								errorMessage="Enter a valid Phone number"
								validate={{
									required: {
										value: true,
										errorMessage:
											'Enter a valid Phone number'
									}
								}}
								placeholder="Enter Phone Number"
							/>
							<div className="textCenter">
								<button className="AppBtn">CREATE USER</button>
							</div>
						</AvForm>
					</div>
				</div>
			</Aux>
		);
	}
}
const mapStateToProps = state => {
	// console.log(state);
	return { createUser: state.createUser.userData };
};
export default connect(
	mapStateToProps,
	{ createUser }
)(CreateUser);
