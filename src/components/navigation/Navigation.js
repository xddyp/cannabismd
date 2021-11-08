import {
	AppBar,
	Typography,
	Hidden,
	Container,
	Stack,
	Link,
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import Logout from '../login/Logout';
import { useAuth } from '../../store/auth-context';
const links = [
	{ title: 'Home', url: '/' },
	{ title: 'Online Evaluation', url: '/online-evaluation' },
	{ title: 'Appointment', url: '/appointment' },
	{ title: 'FAQ', url: '/faq' },
	{ title: 'Doctor Portal', url: '/login' },
];
const links2 = [
	{ title: 'Home', url: '/' },
	{ title: 'Online Evaluation', url: '/online-evaluation' },
	{ title: 'Appointment', url: '/appointment' },
	{ title: 'FAQ', url: '/faq' },
];
const privateLinks = [
	{ title: 'New Inquiry', url: '/inquiry' },
	{ title: 'Return Patient', url: '/return' },
	{ title: 'Search', url: '/search' },
	{ title: 'Download', url: '/download' },
];

const Navigation = () => {
	const { currentUser } = useAuth();
	return (
		<AppBar
			sx={{
				boxShadow: 'rgb(140 152 164 / 25%) 0px 3px 6px 0px',
				background: 'white',
				width: '100%',
			}}
			position='sticky'
			elevation={0}
		>
			<Container maxWidth='lg'>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					py={2}
				>
					<Link
						component={RouterLink}
						underline='hover'
						to='/'
						variant='body1'
						activeStyle={{
							textDecoration: 'none',
						}}
					>
						<Typography variant='h5' color='textPrimary'>
							cannabismd (demo)
						</Typography>
					</Link>

					<Stack direction='row' spacing={3}>
						{!currentUser && (
							<>
								<Hidden mdDown>
									<NavLinks links={links} />
								</Hidden>
								<Hidden mdUp>
									<NavMenu links={links} />
								</Hidden>
							</>
						)}
						{currentUser && (
							<>
								<NavMenu links={links2} />
								<NavLinks links={privateLinks} />
								<Logout />
							</>
						)}
					</Stack>
				</Stack>
			</Container>
		</AppBar>
	);
};

export default Navigation;
