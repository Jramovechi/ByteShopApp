import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let id = useParams();
	let userID = id.id;
	

	useEffect(() => {
		
		axios('/datos.json').then(res =>	{
			const foundItem = res.data.find(x => x.id === Number(userID))
			setItem(foundItem);

		});

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);

	}, [userID]);

	return (
		<div className='ItemDetailContainer'>
			{isLoading ? (
				<Spinner />
			) : (
				<div key={item.id}>

					<ItemDetail data={item} />

				</div>
			)}
		</div>
	);
};

export default ItemDetailContainer;
