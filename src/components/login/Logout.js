import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from '../../store/auth-context';
import ErrorPage from '../../pages/ErrorPage';

const Logout = () => {
	const history = useHistory();
	const [error, setError] = useState();
	const { logout } = useAuth();
	const handleLogout = async () => {
		try {
			await logout();
			history.push('/');
		} catch (e) {
			setError(e.message);
		}
	};
	return (
		<>
			{error && <ErrorPage message={error} />}
			<Button variant='outlined' onClick={handleLogout}>
				Log Out
			</Button>
		</>
	);
};

export default Logout;
