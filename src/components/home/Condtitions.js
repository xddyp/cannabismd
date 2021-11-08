import { Typography, Grid, Box, Stack } from '@mui/material';

import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { GridThree } from '../UI/Grid';

const conditions = [
	{
		title: 'Chronic pain',
	},
	{
		title: 'Opioid replacement',
	},
	{
		title: 'Cancer',
	},
	{
		title: 'Neuropathy',
	},
	{
		title: 'Epilepsy',
	},
	{
		title: 'HIV/AIDS',
	},
	{
		title: 'Spinal cord injury',
	},
	{
		title: 'Placeholderinson’s disease',
	},
	{
		title: 'Multiple sclerosis',
	},
	{
		title: 'Huntington’s disease',
	},
	{
		title: 'Inflammatory bowel disease',
	},
	{
		title: 'Post-traumatic stress disorder',
	},
	{
		title: 'Amyotrophic lateral sclerosis',
	},
];

const Conditions = () => {
	return (
		<Box px={{ xs: 2, sm: 4, md: 6 }}>
			<Grid container spacing={1}>
				{conditions.map((c, index) => (
					<GridThree key={index}>
						<Stack direction='row' spacing={1}>
							<DoneRoundedIcon fontSize='small' color='primary' />
							<Typography variant='subtitle1' color='textPrimary'>
								{c.title}
							</Typography>
						</Stack>
					</GridThree>
				))}
			</Grid>
		</Box>
	);
};
export default Conditions;
