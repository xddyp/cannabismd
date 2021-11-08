import { Typography, Box, Card, Link, Stack } from "@mui/material";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = (props) => {
	return (
		<Stack
			component={Card}
			justifyContent="space-between"
			sx={{
				py: { xs: 2, sm: 3, md: 5 },
				px: { xs: 1, sm: 2, md: 3 },
				height: "100%",
				"&:hover": {
					border: 2,
					borderColor: "primary.main",
				},
			}}
		>
			<Stack spacing={1}>
				<Box color="primary.main">
					<FontAwesomeIcon icon={faQuoteLeft} size="1x" />
				</Box>
				<Typography variant="body1" align="left" color="textSecondary">
					{props.review.reviews}
				</Typography>
				<Link
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.google.com/search?_ga=2.259759566.595310059.1632268725-78306090.1632268725&q=Cannabis+MD+(Medical+Marijuana+Doctor)&ludocid=3375355701239940970&lsig=AB86z5VT2ni4dAP34LgxEwx1Kfot#lrd=0x89c25bb348c022f1:0x2ed7ac207aff076a,1,,,"
				>
					Read More
				</Link>
			</Stack>
			<Box textAlign="right">
				<Rating name="read-only" value={props.review.rating} readOnly />
				<Typography variant="subtitle1" align="right" color="textSecondary">
					{props.review.name}
				</Typography>
				{/* <Typography variant="body2" align="right" color="textSecondary">
					{props.review.time}
				</Typography> */}
			</Box>
		</Stack>
	);
};

export default ReviewCard;
