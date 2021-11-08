import { useState } from 'react';
import { Box, Container } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import IntakeForm from '../components/intake-form/IntakeForm';
import HeaderAlt from '../components/UI/HeaderAlt';
import ErrorPage from './ErrorPage';

const FormPage = () => {
	const [error, setError] = useState(null);
	const handleError = (message) => {
		setError(message);
	};
	return (
		<>
			<HeaderAlt
				title='Online Evaluation Intake Form'
				subtitle='Contact Doctor Placeholder today to get your medical marijuana card'
			/>
			{error && (
				<ErrorPage message='An error occured. Please call (123) 456-7890 or email ask@cannabismd.demo directly for assistance.' />
			)}
			{!error && (
				<Container maxWidth='lg' align='left'>
					<Box maxWidth='900px' mt={{ xs: -4, sm: -8 }} mb={2}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<IntakeForm passError={handleError} />
						</LocalizationProvider>
					</Box>
				</Container>
			)}
		</>
	);
};

export default FormPage;
