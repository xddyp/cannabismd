import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ApptForm from '../components/appointment/ApptForm';
import { ContactV } from '../components/appointment/Contact';
import HeaderAlt from '../components/UI/HeaderAlt';
import Section from '../components/UI/Section';
import ErrorPage from './ErrorPage';

import { Grid, Box, Container, Card } from '@mui/material';
import Map from '../components/appointment/Map';

const ContactPage = () => {
	const [error, setError] = useState(null);
	const handleError = (message) => {
		setError(message);
	};
	return (
		<>
			<HeaderAlt
				title='Get in touch'
				subtitle="We'd love to talk about how we can help you."
			/>
			{error && (
				<ErrorPage message='An error occured. Please call (123) 456-7890 or email ask@cannabismd.demo directly for assistance.' />
			)}
			{!error && (
				<Box bgcolor='background.default'>
					<Container maxWidth='lg'>
						<Grid container spacing={2}>
							<Grid item sm={12} md={5}>
								<Box py={{ xs: 2, sm: 3, md: 4 }}>
									<ContactV />
								</Box>
							</Grid>
							<Grid item sm={12} md={7}>
								<Box
									component={Card}
									sx={{
										py: { xs: 2, sm: 3, md: 4 },
										px: { xs: 2, sm: 3, md: 4 },
										mt: { xs: 2, md: -8 },
									}}
								>
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<ApptForm passError={handleError} />
									</LocalizationProvider>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>
			)}
			<Section>
				<Map />
			</Section>
		</>
	);
};

export default ContactPage;
