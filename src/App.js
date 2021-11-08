// import react
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// import mui components
import { ThemeProvider, CircularProgress, Box } from '@mui/material';

// import local components
import Navigation from './components/navigation/Navigation';
import theme from './components/UI/theme';
import PrivateRoute from './components/utils/PrivateRoute';
import { useAuth } from '../src/store/auth-context';
import { getAnalytics } from 'firebase/analytics';

// import pages using React.lazy
const Home = React.lazy(() => import('./pages/Home'));
const FormPage = React.lazy(() => import('./pages/FormPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const PatientPage = React.lazy(() => import('./pages/PatientPage'));
const InquiryPage = React.lazy(() => import('./pages/InquiryPage'));
const ReturnPage = React.lazy(() => import('./pages/ReturnPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const DownloadPage = React.lazy(() => import('./pages/DownloadPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const ConfirmPage = React.lazy(() => import('./pages/ConfirmPage'));
const Footer = React.lazy(() => import('./components/UI/Footer'));

function App() {
	const { currentUser } = useAuth();
	const analytics = getAnalytics();
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navigation />
				<Suspense
					fallback={
						<Box sx={{ m: 'auto' }}>
							<CircularProgress />
						</Box>
					}
				>
					<main>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/online-evaluation' component={FormPage} />
							<Route path='/appointment' component={ContactPage} />
							<Route path='/faq' component={FAQPage} />
							<Route path='/thankyou' component={ConfirmPage} />
							<Route path='/login' component={LoginPage} />
							{currentUser && (
								<>
									<PrivateRoute path='/inquiry' component={InquiryPage} />
									<PrivateRoute path='/return' component={ReturnPage} />
									<PrivateRoute path='/search' component={SearchPage} />
									<PrivateRoute path='/download' component={DownloadPage} />
									<PrivateRoute path='/patients/:id' component={PatientPage} />
								</>
							)}
							<Route path='*'>
								<NotFound />
							</Route>
						</Switch>
					</main>
					<Footer />
				</Suspense>
			</ThemeProvider>
		</>
	);
}

export default App;
