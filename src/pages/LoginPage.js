import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import { useAuth } from '../store/auth-context';
import { Card, Typography, Button } from '@mui/material';

import ErrorPage from './ErrorPage';

const LoginPage = () => {
	const history = useHistory();
	const [error, setError] = useState();
	const { login, currentUser, signup } = useAuth();
	const [newUser, setNewUser] = useState(false);

	const handleLogin = async (values) => {
		try {
			await login(values.email, values.password);
			history.push('/inquiry');
		} catch (e) {
			setError(e.message);
		}
	};
	const handleSignUp = async (values) => {
		try {
			await signup(values.email, values.password);
			history.push('/inquiry');
		} catch (e) {
			setError(e.message);
		}
	};

	return (
		<>
			{error && <ErrorPage message={error} />}
			<Card sx={{ width: 400, p: 3, mx: 'auto', mt: 3, border: 1 }}>
				{newUser && (
					<>
						<Typography align='center' variant='h6'>
							Sign Up/
							<Button onClick={() => setNewUser(false)}>
								Already have a account
							</Button>
						</Typography>
						<LoginForm onSubmit={handleSignUp} />
					</>
				)}
				{!newUser && (
					<>
						<Typography align='center' variant='h6'>
							Log In/
							<Button onClick={() => setNewUser(true)}>New User Sign Up</Button>
						</Typography>
						<LoginForm onSubmit={handleLogin} />
					</>
				)}
			</Card>
		</>
	);
};
export default LoginPage;
