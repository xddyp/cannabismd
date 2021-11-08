import { Box, Typography, Container } from "@mui/material";

const SubLayout = (props) => {
	return (
		<>
			<Box bgcolor="primary.main" mb={3} p={3} color="white">
				<Container maxWidth="lg">
					<Typography variant="h6">{props.title}</Typography>
				</Container>
			</Box>
			<Container maxWidth="lg">
				<Box my={3}>{props.children}</Box>
			</Container>
		</>
	);
};
export default SubLayout;
