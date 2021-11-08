import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			main: "#2d51a3",
			contrastText: "#fff",
		},
		secondary: {
			main: "#f9b934",
		},
		text: {
			primary: "#2d3748",
			secondary: "#718096",
		},
		background: {
			default: "#fafafa",
		},
	},
	typography: {
		fontFamily: "'Urbanist', sans-serif",
		h2: {
			fontWeight: 700,
		},
		h3: {
			fontWeight: 700,
		},
		h4: {
			fontWeight: 600,
		},
		h5: {
			fontWeight: 600,
		},
		h6: {
			fontWeight: 500,
		},
		subtitle1: {
			fontWeight: 600,
			fontSize: "1.05rem",
		},
	},
	shadows: [
		"none",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
		"5px 5px 5px 0 rgb(23 70 161 / 15%),-1px 0px 5px 0 rgb(23 70 161 / 5%)",
	],
	shape: {
		borderRadius: 18,
	},
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				contained: {
					// Some CSS
					boxShadow: "none",
					// &:focus,
					"&:hover": {
						backgroundColor: "#3a67cf",
						boxShadow: "0 0 0 0.2rem white,0 0 0 0.3rem #3a67cf",
					},
				},
				outlined: {
					"&:hover": {
						backgroundColor: "white",
						borderColor: "#3a67cf",
						color: "#3a67cf",
						boxShadow: "0 0 0 0.2rem white,0 0 0 0.3rem #3a67cf",
					},
				},
			},
		},
	},
});
theme = responsiveFontSizes(theme);

export default theme;
