import { Typography, Box } from "@mui/material";

const SectionTitle = (props) => {
	return (
		<Box
			sx={{
				mb: { xs: 3, sm: 5, md: 7 },
				px: { xs: 2, sm: 4, md: 8 },
			}}
		>
			<Typography component="h1" variant="h4" align="center" paragraph>
				<Typography component="span" variant="h4" color="secondary">
					{props.title.text4}
				</Typography>
				{props.title.text1}
				<Typography component="span" variant="h4" color="primary">
					{props.title.text2}
				</Typography>
				{props.title.text3}
			</Typography>
			<Typography variant="h6" align="center" color="textSecondary">
				{props.title.subtext}
			</Typography>
		</Box>
	);
};
export default SectionTitle;
