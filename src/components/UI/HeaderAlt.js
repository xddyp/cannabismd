import { Typography, Box, Container } from "@mui/material";

const cardPaddingYB = { xs: 6, sm: 9, md: 12 };
const cardPaddingYT = { xs: 3, sm: 6, md: 9 };

const HeaderAlt = (props) => {
	return (
		<Box bgcolor="primary.main">
			<Container maxWidth="lg">
				<Box pb={cardPaddingYB} pt={cardPaddingYT} color="white">
					<Typography variant="h3" align="left" gutterBottom>
						{props.title}
					</Typography>
					<Typography variant="h6" align="left" paragraph>
						{props.subtitle}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
export default HeaderAlt;
