import React , { useState, useContext  } from 'react';
import { cartContext } from '../../Context/cartContext'

//Componentes + CSS
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

//Material UI
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// REACT ROUTER DOM
import { Link } from 'react-router-dom';


const ItemDetail = ({ data }) => {
	const [comprado, setComprado] = useState(false)

	const addCart = useContext(cartContext);

	const onAdd = () => {
		setComprado(true);
		addCart();
	}

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

		{comprado ? (
        <Link to="/cart"><button>Terminar Compra</button></Link>
		) : (
			<ItemCount stock={ data.stock } initial={1} onAdd={onAdd} />
		)}

		</Card>
	);
};

export default ItemDetail; 