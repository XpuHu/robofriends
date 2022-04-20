import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('Nooooooo');
	// }
	return (
		<Fragment>
			{
				robots.map( (user, i) => {
					return (
						<Card 
							key={user.id} 
							id={user.id} 
							name={user.name} 
							email={user.email} 
						/>
					);
				})
			}	
		</Fragment>
	);
}

export default CardList;