import { Box, Container, Typography, Stack } from '@mui/material';

import logoW from '../../asset/logoW.png';

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				bgcolor: 'primary.main',
				// bottom={0}
				width: '100%',
				minHeight: '200px',
			}}
		>
			<Container maxWidth='lg'>
				<Stack
					component='footer'
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent='space-between'
					alignItems='flex-start'
					spacing={2}
					sx={{
						py: 3,
						// bottom={0}
						width: '100%',
						minHeight: '200px',
					}}
				>
					<Box color='white'>
						<img src={logoW} width='120px' alt='logo' />
					</Box>
					<Box color='white'>
						<Typography variant='body1'>Phone:</Typography>
						<Typography variant='body2'>(123) 456-7890</Typography>
						<Typography variant='body2'>Call or Text</Typography>
						<br />
						<Typography variant='body1'>Email:</Typography>
						<Typography variant='body2' sx={{ a: { color: 'white' } }}>
							<a href='mailto: ask@cannabismd.demo'>ask@cannabismd.demo</a>
						</Typography>
					</Box>

					<Box color='white'>
						<Typography variant='body1'>Address:</Typography>
						<Typography variant='body2'>123 Placeholder Ave</Typography>
						<Typography variant='body2'>Brooklyn, NY 11217</Typography>
						<br />
						<Typography variant='body1'>Hours:</Typography>
						<Typography variant='body2'>Monday to Friday 10AM – 8PM</Typography>
						<Typography variant='body2'>Saturday 10AM – 6PM</Typography>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};
export default Footer;
