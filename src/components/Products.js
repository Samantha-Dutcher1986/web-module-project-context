import React, { useContext } from 'react';
import { productContext } from '../contexts/productContext';

// Components
import Product from './Product';

const Products = () => {
	const [ products, addItem ] = useContext( productContext );

	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
