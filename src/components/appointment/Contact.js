import { Avatar, Stack, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhoneVolume,
	faEnvelope,
	faClinicMedical,
	faClock,
} from '@fortawesome/free-solid-svg-icons';

const contacts = [
	{ method: 'Call or Text', info: '123-456-7890', icon: faPhoneVolume },
	{
		method: 'Visit',
		info: '123 Placeholder Ave, Brooklyn, NY 11217',
		icon: faClinicMedical,
	},
	{
		method: 'Email',
		info: <a href='mailto: ask@cannabismd.demo'>ask@cannabismd.demo</a>,
		icon: faEnvelope,
	},
];

export const ContactV = (props) => {
	return (
		<Stack spacing={2}>
			{contacts.map((c, index) => (
				<Stack direction='row' spacing={2} key={index} alignItems='center'>
					<Avatar
						variant='rounded'
						sx={{
							backgroundColor: 'secondary.main',
							height: '45px',
							width: '45px',
							borderRadius: '16px',
						}}
					>
						<FontAwesomeIcon icon={c.icon} size='lg' color='white' />
					</Avatar>
					<div>
						<Typography variant='subtitle1' color='textSecondary'>
							{c.method}
						</Typography>
						<Typography
							variant='subtitle1'
							color='textPrimary'
							sx={{ a: { color: '#2d51a3' } }}
						>
							{c.info}
						</Typography>
					</div>
				</Stack>
			))}
			<Stack direction='row' spacing={2} key='hours' alignItems='center'>
				<Avatar
					variant='rounded'
					sx={{
						backgroundColor: 'secondary.main',
						height: '45px',
						width: '45px',
						borderRadius: '16px',
					}}
				>
					<FontAwesomeIcon icon={faClock} size='lg' color='white' />
				</Avatar>
				<div>
					<Typography variant='subtitle1' color='textSecondary'>
						Hours
					</Typography>
					<Typography variant='subtitle1' color='textPrimary'>
						Monday to Friday 10AM – 8PM <br />
						Saturday 10AM – 6PM
					</Typography>
				</div>
			</Stack>
		</Stack>
	);
};
export const ContactH = (props) => {
	return (
		<Stack
			direction={{ xs: 'column', md: 'row' }}
			spacing={2}
			px={2}
			justifyContent='space-between'
		>
			{contacts.map((c, index) => (
				<Stack direction='row' spacing={2} key={index} alignItems='center'>
					<Avatar
						variant='rounded'
						sx={{
							backgroundColor: 'secondary.main',
							height: '45px',
							width: '45px',
							borderRadius: '16px',
						}}
					>
						<FontAwesomeIcon icon={c.icon} size='lg' color='white' />
					</Avatar>
					<div>
						<Typography variant='subtitle1' color='textSecondary'>
							{c.method}
						</Typography>
						<Typography
							variant='subtitle1'
							color='textPrimary'
							sx={{ a: { color: '#2d51a3' } }}
						>
							{c.info}
						</Typography>
					</div>
				</Stack>
			))}
		</Stack>
	);
};
