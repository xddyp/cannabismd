import { Grid } from '@mui/material';
import { GridThree } from '../UI/Grid';
import ReviewCard from '../UI/ReviewCard';

const reviews = [
	{
		name: 'T. A.',
		rating: 5,
		reviews:
			'Dr. Placeholder was amazing. I’m glad I switched over to him because he is so knowledgeable. I’ve been taking my suggested medication and I feel so much better. Please don’t hesitate to see him. The process was fast! Thank you Dr. Placeholder for listening to my concerns and helping me get the medicine that was best for me.',
		time: '3 months ago',
	},
	{
		name: 'D. B.',
		rating: 5,
		reviews:
			'I highly recommend Dr. Placeholder as a medical marijuana doctor. He is easy to talk to, knowledgeable about the different options, and made good recommendations regarding the various dispensaries. He is thorough and stresses throughout the visit that he is available at any time after the visit should any questions or concerns arise. I had some difficulty finding my temporary card on the NYS website...',
		time: '3 months ago',
	},

	{
		name: 'R. N.',
		rating: 5,
		reviews:
			'I got really lucky to end up with Dr Placeholder! Not only is the price more affordable then other places; one cannot put a price on my experience with Dr Park. So kind, patient, knowledgeable and thorough, SUCH A DELITE. Love the atmosphere, attention to detail; Dr. Placeholder answered all my questions and from beginning to end was flawless, easy and fast. I did not feel rushed, in fact the opposite...',
		time: 'a year ago',
	},
];

const Reviews = () => {
	return (
		<Grid container spacing={2}>
			{reviews.map((r, index) => (
				<GridThree key={index}>
					<ReviewCard review={r} />
				</GridThree>
			))}
		</Grid>
	);
};

export default Reviews;
