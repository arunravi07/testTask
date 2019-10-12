import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../../store/actions/loginAction';
import LogoImg from '../../../assets/images/whiterabbit-logo.svg';
import { Link } from 'react-router-dom';
import './TopBar.css';
// import * as LocalStore from '../../../res/LocalStore';

class TopBar extends Component {
	logOut = event => {
		event.persist();
		this.props.logoutRequest();
	};

	render() {
		return (
			<div className="TopBar">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-4">
							<Link to="/" className="LogoIcon">
								<img src={LogoImg} alt="logo img" />
							</Link>
						</div>
						<div className="col-md-8">
							<ul className="navbar justify-content-end align-items-center">
								<li className="navItem">
									<Link to="/users">Users</Link>
								</li>
								<li className="navItem">
									<Link to="/create-user">Add User</Link>
								</li>
								{/* <li className="navItem">
									<Link to="/error404">not found</Link>
								</li> */}
								<li className="navItem">
									<Link to="/login" onClick={this.logOut}>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// export default TopBar;

const mapStateToProps = state => {
	// console.log(state);
	return {
		logoutRequest: state.logoutRequest
	};
};
export default connect(
	mapStateToProps,
	{ logoutRequest }
)(TopBar);
