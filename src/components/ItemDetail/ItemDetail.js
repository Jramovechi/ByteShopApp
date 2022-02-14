import * as React from 'react';
import "./ItemDetail.css";

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ItemDetail = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345 }} style={{ margin: 40, minWidth: 800 }}>
			<CardMedia className='ItemSrc' component='iframe' image={data.image} alt=''/>
			<CardContent>
				<Typography gutterBottom variant='h2' component='div'>
					{data.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.category}
				</Typography>
				<Typography variant='h4' color='text.primary'>
					{data.description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ItemDetail; 