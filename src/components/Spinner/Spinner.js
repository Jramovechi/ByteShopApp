import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
	return (
		<Box sx={{ display: 'flex' }} style={{ margin: 40 }}>
			<CircularProgress />
		</Box>
	);
};

export default Spinner;
