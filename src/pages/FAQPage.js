import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ApptForm from '../components/appointment/ApptForm';
import { ContactH } from '../components/appointment/Contact';
import HeaderAlt from '../components/UI/HeaderAlt';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import { Box, Card, Stack } from '@mui/material';
import FAQ from '../components/faq/FAQ';
import ErrorPage from './ErrorPage';

const FAQPage = () => {
	const [error, setError] = useState(null);
	const handleError = (message) => {
		setError(message);
	};
	return (
		<>
			<HeaderAlt
				title='Have a question?'
				subtitle='Search our FAQ for answers to anything you might ask.'
			/>
			<Section>
				<FAQ />
			</Section>
			{error && (
				<ErrorPage message='An error occured. Please call (123) 456-7890 or email ask@cannabismd.demo directly for assistance.' />
			)}
			{!error && (
				<Section>
					<SectionTitle
						title={{
							text1: "Can't find the answer you need?",
							subtext: 'Please contact us. We will respond within 24 hours',
						}}
					/>
					<Stack spacing={4} justifyContent='center' maxWidth='900px' mx='auto'>
						<ContactH />
						<Box
							component={Card}
							sx={{
								py: { xs: 2, sm: 3, md: 4 },
								px: { xs: 2, sm: 3, md: 4 },
							}}
						>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<ApptForm passError={handleError} />
							</LocalizationProvider>
						</Box>
					</Stack>
				</Section>
			)}
		</>
	);
};

export default FAQPage;
