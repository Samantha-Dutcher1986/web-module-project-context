import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { productContext } from './contexts/productContext';
import { cartContext } from './contexts/cartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		console.log('localStorage', localStorage);
		if(localStorage.getItem('cart')){
			const parsedCart = JSON.parse(localStorage.getItem('cart'));
			setCart(parsedCart);
			return;
		} else {
			return;
		}
	}, []);

	console.log('empty cart:', cart);

	const addItem = item => {
		// add the given item to the cart
		const newCart = [...cart, item];
		localStorage.setItem('cart', JSON.stringify(newCart));
		setCart([...cart, item]);
		console.log('filled cart:', cart);
	};

	return (
		<div className="App">
			<productContext.Provider value={[ produtcts, addItem ]}>
				<cartContext.Provider value={[ cart ]}>
					<Navigation />
				</cartContext.Provider>
				{/* Routes */}
				<Route exact path="/">
				<Products />
				</Route>
				<cartContext.Provider value={[ cart, setCart ]}>
					<Route path='/cart'>
						<ShoppingCart />
					</Route>
				</cartContext.Provider>
			</productContext.Provider>
		</div>
	);
}

export default App;
