import React from 'react';
import Aux from '../../hoc/Aux_';
// import { withRouter } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import Footer from './Footer/Footer';

const layout = props => {
	return (
		<Aux>
			{props.isLoggedIn ? (
				<div id="Wrapper">
					<TopBar />
					<div className="PageContent">
						<div className="ContentArea">{props.children}</div>
						<Footer />
					</div>
				</div>
			) : (
				<div id="Wrapper">
					<div className="PageContent d-flex align-items-center justify-content-center">
						{props.children}
					</div>
				</div>
			)}
		</Aux>
	);
};

export default layout;
