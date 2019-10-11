import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInRedux } from '../../store/actions/searchActions';
import './Search.css';
class Search extends Component {
	state = {};
	triggerSearch = async input => {
		await this.props.searchInRedux(input.target.value);
	};

	render() {
		return (
			<div className='SearchContainer'>
				<div className='form-group'>
					<input
						type='text'
						onChange={event => this.triggerSearch(event)}
						placeholder='Search users'
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userData: state.users.userData,
		searchResult: state.users.searchInRedux
	};
};
export default connect(
	mapStateToProps,
	{ searchInRedux }
)(Search);
