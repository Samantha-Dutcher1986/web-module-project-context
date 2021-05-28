import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { cartContext } from '../contexts/cartContext';

const Navigation = props => {
	const [ cart ] = useContext( cartContext );
	console.log('cart', cart)

	return(
		<div className='navigation'>
			<NavLink to='/'>Products</NavLink>
			<NavLink to='/cart'>
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
