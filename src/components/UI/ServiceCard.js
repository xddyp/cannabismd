import { Typography, Box, Card } from "@mui/material";

const ServiceCard = (props) => {
	return (
		<Box
			p={{ xs: 2, sm: 3, md: 4 }}
			border={props.highlight ? 2 : 0}
			borderColor="secondary.main"
			component={Card}
		>
			<Box mb={3}>
				<Typography variant="h5" align="center" color="primary" paragraph>
					{props.title}
				</Typography>
			</Box>
			<Box
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				{props.children}
			</Box>
		</Box>
	);
};

export default ServiceCard;
