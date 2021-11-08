import { Box, Container } from "@mui/material";

const Section = (props) => {
	return (
		<Box
			sx={{
				py: { xs: 3, sm: 5, md: 7 },
				bgcolor: props.bgcolor ? props.bgcolor : "background.default",
			}}
		>
			<Container maxWidth="lg">{props.children}</Container>
		</Box>
	);
};
export default Section;
