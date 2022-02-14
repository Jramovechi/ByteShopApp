import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemListContainer.css';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
		
	axios('/datos.json').then((res) =>
	setItems(res.data)
	);

	setTimeout(() => {
	setIsLoading(false);
	}, 1000);

}, []);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='ItemListContainer-container'>
					{items.map((item) => {
						return (
							<div key={item.id}>
								<Link to={`/detail/${item.id}`} className='LinkCard'>
									<Item data={item} />
								</Link>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default ItemListContainer;
