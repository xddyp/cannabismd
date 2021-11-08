import React, { useState, useEffect, useContext } from 'react';
import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

const AuthContext = React.createContext();
export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const auth = getAuth();

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = () => {
		return signOut(auth);
	};
	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	useEffect(() => {
		const unsubcribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubcribe;
	}, [auth]);

	const contextValue = {
		currentUser,
		login,
		logout,
		signup,
	};
	return (
		<AuthContext.Provider value={contextValue}>
			{!loading && props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
