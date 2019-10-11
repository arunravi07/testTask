import React from 'react';
import './Footer.css';
const footer = props => (
	<div className="Footer textCenter">
		<div className="container-fluid">
			{new Date().getFullYear()} © WhiteRabbit.
		</div>
	</div>
);

export default footer;
