import React, { useContext } from 'react';
import { cartContext } from '../contexts/cartContext';

const Item = props => {
	const [ cart, setCart ] = useContext( cartContext );

	const removeHandler = (id) => {
		const newCart = cart.filter( item => item.id !== id )
		localStorage.setItem('CART', JSON.stringify(newCart));
		setCart(newCart);
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeHandler(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
