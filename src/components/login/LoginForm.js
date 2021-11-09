import { Formik, Form, FastField } from 'formik';
import { Button, LinearProgress, Stack } from '@mui/material';
import * as yup from 'yup';
import { TextFieldFormik } from '../UI/TextFieldFormik';

const LoginForm = (props) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		await props.onSubmit(values);
		resetForm();
		setSubmitting(false);
	};
	return (
		<Formik
			initialValues={{ email: 'test@gmail.com', password: '123456' }}
			validationSchema={yup.object().shape({
				email: yup.string().required(),
				password: yup.string().required(),
			})}
			onSubmit={handleSubmit}
			validateOnChange={false}
		>
			{({ isSubmitting }) => (
				<Form>
					<Stack spacing={2}>
						<FastField
							component={TextFieldFormik}
							name='email'
							type='text'
							label='Email'
							required
						/>
						<FastField
							component={TextFieldFormik}
							name='password'
							type='text'
							label='Password'
							required
						/>
						{isSubmitting && <LinearProgress />}
						<Button
							fullWidth
							variant='contained'
							color='primary'
							disabled={isSubmitting}
							type='submit'
						>
							Submit
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
