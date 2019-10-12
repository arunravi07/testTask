import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LocalStore from '../../res/LocalStore';
import { putUserData, loadUser } from '../../store/actions/usersAction';
import UserCard from '../../components/UserCards/UserCards';
import Search from '../../components/Search/Search';
import './Users.css';
import PreLoader from '../../components/PreLoader/PreLoader';
import Aux from '../../hoc/Aux_';

class Users extends Component {
	componentDidMount = async () => {
		const isEmpty = obj => {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) return false;
			}
			return true;
		};

		if (isEmpty(this.props.userData)) {
			if (
				LocalStore.getUserData() &&
				LocalStore.getUserData() !== undefined
			) {
				//checking if logged in:checking for userdata in localstore
				await this.props.putUserData(LocalStore.getUserData());
			} else {
				await this.props.loadUser();
			}
		}
	};
	render() {
		return (
			<Aux>
				{this.props.isLoading && <PreLoader />}
				{this.props.userData && (
					<div className="Users">
						<div className="container">
							<h2>Users</h2>
							<Search userData={this.props.userData} />
							{this.props.displayData &&
							this.props.displayData[0] ? (
								<div className="UserList" id="userList">
									<div className="row">
										{this.props.displayData &&
											this.props.displayData.map(
												(data, dno) => {
													return (
														<UserCard
															key={dno}
															cardData={data.user}
														/>
													);
												}
											)}
									</div>
								</div>
							) : (
								!this.props.isLoading && (
									<div className="Cards NoResult textCenter">
										<h4>no result found</h4>
									</div>
								)
							)}
						</div>
					</div>
				)}
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state.users);
	return {
		userData: state.users.userData,
		displayData: state.users.displayData,
		searchData: state.users.searchInRedux,
		isLoading: state.users.isLoading
	};
};
export default connect(
	mapStateToProps,
	{ putUserData, loadUser }
)(Users);
