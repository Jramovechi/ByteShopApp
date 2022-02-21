import React from 'react';

import Cart from "../../components/Cart/Cart";

const styles = {
	container: {
		margin: '40px 0 40px 0',
	},
};

const CartView = () => {
	return (
		<div style={styles.container}>
			<Cart/> 
		</div>
	);
};

export default CartView;
