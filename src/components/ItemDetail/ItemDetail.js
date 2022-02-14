import * as React from 'react';
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ItemDetail = ({ data }) => {
	return (

		<Card sx={{ maxWidth: 355 }} className='Card'>
		<CardMedia 
			className='imgProduct'
			component='img'
			height='280'
			image={data.image}
			alt='Product'
		/>
		<CardContent className='textCard'>
			<Typography gutterBottom variant='h5' component='div'>
				Product: {data.title}
			</Typography>
			<Typography variant='h5' color='text.secondary'>
				Category: {data.category}
			</Typography>
			<Typography variant='h5' color='text.secondary'>
				Price: $ {data.price}
			</Typography>
			<Typography variant='body2' color='text.secondary'>
					{data.description}
			</Typography>
		</CardContent>

		<ItemCount
                stock= {10}
                initial= {1}
                />
		</Card>
	);
};

export default ItemDetail; 