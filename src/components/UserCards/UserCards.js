import React from 'react';
import './UserCards.css';
// can be used to map through unknown key value pair objects
// const createKeyPair = userData => {
// 	let keys = Object.keys(userData);
// 	let generatedCard = keys.map(key => {
// 		if (typeof userData[key] === 'object') {
// 			return createKeyPair(userData[key]);
// 		} else {
// 			return (
// 				<div className='row' key={key}>
// 					<div className='col-md-4'>{key}</div>{' '}
// 					<div className='col-md-8'>{userData[key]}</div>
// 				</div>
// 			);
// 		}
// 	});
// 	return generatedCard;
// };

// export default UserCard;
const userCard = props => {
	// console.log(props.cardData);
	// const elems = createKeyPair(props.cardData);
	// const keyObj = keys.map(key => {
	// 	console.log(key, typeof props.cardData[key]);
	// });
	// return <div className="Cards">{elems}</div>;

	return (
		<div className="col-md-4">
			<div className="Cards UserCards textCenter">
				{/* <div className="Cards">{elems}</div> */}
				<div className="UserImg">
					<img
						src={
							props.cardData.picture
								? props.cardData.picture.large
								: ''
						}
						alt=""
					/>
				</div>
				<h3 className="Name textCapitalize">
					{`${props.cardData.name.title}. ${props.cardData.name.first} 
					${props.cardData.name.last}`}
				</h3>
				<div className="Email">
					<a
						href={`mailto:${props.cardData.email}`}
						title={props.cardData.email}
					>
						<i className="ion-ios-mail" />
						{/* {props.cardData.email} */}
					</a>
					<a
						href={`tel:${
							props.cardData.phone ? props.cardData.phone : ''
						}`}
						title={props.cardData.phone ? props.cardData.phone : ''}
					>
						<i className="ion-ios-call"></i>
						{/* {props.cardData.phone} */}
					</a>
				</div>
				{props.cardData.dob ? (
					<div className="Dob">
						<i className="ion-md-calendar"></i> Date of Birth :
						{` ${new Date(props.cardData.dob).getDate()}/${new Date(
							props.cardData.dob
						).getMonth() + 1}/${new Date(
							props.cardData.dob
						).getYear()}`}
					</div>
				) : (
					''
				)}
				{props.cardData.location ? (
					<div>
						<div className="Label">
							<i className="ion-ios-home"></i> Location
						</div>
						<div className="Location textCapitalize">
							<p>{props.cardData.location.street}</p>
							<p>{props.cardData.location.city}</p>
							<p>{props.cardData.location.state}</p>
							<p>{props.cardData.location.zip}</p>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};
export default userCard;
