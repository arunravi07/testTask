import React from 'react';
import './PreLoader.css';

const preloader = () => {
	return (
		<div className='PreLoader'>
			<div className='spinner-grow text-success' role='status'>
				<span className='sr-only'></span>
			</div>
			<div className='spinner-grow text-info' role='status'>
				<span className='sr-only'></span>
			</div>
			<div className='spinner-grow text-warning' role='status'>
				<span className='sr-only'></span>
			</div>
		</div>
	);
};
export default preloader;
