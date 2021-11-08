import { Typography, Card, Avatar, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = (props) => {
	return (
		<Stack
			alignItems="center"
			spacing={2}
			sx={{
				py: { xs: 2, sm: 3, md: 5 },
				px: { xs: 1, sm: 2, md: 3 },
				height: "100%",
				"&:hover": {
					border: 2,
					borderColor: "primary.main",
				},
			}}
			component={Card}
		>
			<Avatar
				variant="rounded"
				sx={{
					backgroundColor: "rgba(25, 118, 210, 0.1)",
					height: "70px",
					width: "70px",
					borderRadius: "16px",
				}}
			>
				<FontAwesomeIcon icon={props.feature.icon} size="lg" color="#2d51a3" />
			</Avatar>
			<Typography variant="h6" color="primary" align="center">
				{props.feature.title}
			</Typography>
			<Typography variant="body1" color="textSecondary">
				{props.feature.description}
			</Typography>
		</Stack>
	);
};

export default FeatureCard;
