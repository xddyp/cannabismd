import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { initializeApp } from "firebase/app";

import "./index.css";

import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MESUREMENT_ID,
};

initializeApp(firebaseConfig);

ReactDOM.render(
	<AuthContextProvider>
		<Router>
			<CssBaseline />
			<App />
		</Router>
	</AuthContextProvider>,
	document.getElementById("root")
);
