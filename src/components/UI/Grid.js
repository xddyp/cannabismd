import { Grid } from "@mui/material";
export const GridThree = (props) => {
	return (
		<Grid item xs={12} sm={6} md={4}>
			{props.children}
		</Grid>
	);
};
