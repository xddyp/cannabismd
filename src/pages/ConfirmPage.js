import { Typography, Stack, Box } from '@mui/material';
import header2 from '../asset/header2.jpg';

const ConfirmPage = () => {
	return (
		<Box
			sx={{
				m: 'auto',
				backgroundImage: `url(${header2})`,
				backgroundSize: 'cover',
			}}
		>
			<Stack
				justifyContent='center'
				sx={{
					height: '70vh',
					bgcolor: 'rgba(8, 24, 57, 0.49)',
				}}
			>
				<Typography
					component='h1'
					variant='h4'
					align='center'
					color='white'
					paragraph
				>
					Thank you!
				</Typography>
				<Typography variant='h6' align='center' color='white'>
					Doctor Placeholder will review your information and reach out to you
					shortly.
				</Typography>
			</Stack>
		</Box>
	);
};

export default ConfirmPage;
