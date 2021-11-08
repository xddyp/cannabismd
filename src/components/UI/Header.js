import { NavLink as RouterLink } from 'react-router-dom';
import {
	Typography,
	Button,
	Hidden,
	Box,
	Container,
	Stack,
} from '@mui/material';

import header2 from '../../asset/header2.jpg';

const Header = () => {
	return (
		<Box sx={{ bgcolor: 'background.default' }}>
			<Container maxWidth='lg' sx={{ display: 'flex' }}>
				<Box sx={{ py: { xs: 3, sm: 6, md: 9 }, px: { xs: 1, sm: 2, md: 3 } }}>
					<Typography
						variant='h3'
						align='left'
						color='textPrimary'
						gutterBottom
					>
						A{' '}
						<Typography variant='h3' component='span' color='primary'>
							natural
						</Typography>{' '}
						approach to medicine
					</Typography>
					<Typography variant='h6' align='left' color='textSecondary' paragraph>
						Contact Doctor Placeholder Today to Get Your Medical Marijuana Card
					</Typography>
					<Stack direction='row' spacing={3}>
						<Button
							variant='contained'
							color='primary'
							to='/appointment'
							component={RouterLink}
							size='large'
						>
							Schedule office visit
						</Button>
						<Button
							variant='outlined'
							color='primary'
							to='/online-evaluation'
							component={RouterLink}
							size='large'
						>
							Online evaluation
						</Button>
					</Stack>
				</Box>
				<Hidden mdDown>
					<Box sx={{ maxWidth: '45%' }}>
						<Box
							sx={{
								width: '50vw',
								height: '100%',
								backgroundImage: `url(${header2})`,
								backgroundSize: 'cover',
								backgroundPosition: 'top center',
								clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
							}}
						></Box>
					</Box>
				</Hidden>
			</Container>
		</Box>
	);
};
export default Header;
