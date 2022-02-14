import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import Item from "../../components/Item/Item";
import Spinner from '../../components/Spinner/Spinner';

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let id = useParams();
	let userID = id.id;
	

	useEffect(() => {
		
		axios('/datos.json').then(res =>	{
			const foundItem = res.data.find(x => x.id === userID)
			setItem(foundItem);

		});

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);

	}, [userID]);

	return (
		<div className='ItemListContainer-Container'>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='ItemListContainer-detail'>
					{item.map(item =>  { 
						return (
							<div key={item.id}>
								<Item data={item} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ItemDetailContainer;
