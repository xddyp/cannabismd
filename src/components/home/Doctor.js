import { Typography, Card, CardMedia, Grid } from '@mui/material';
import DoctorImage from '../../asset/dr-alt.jpg';
const Doctor = () => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} sm={6}>
				<Card>
					<CardMedia
						component='img'
						image={DoctorImage}
						title='DoctorPlaceholder'
						sx={{ height: { xs: 300, sm: 400 } }}
					></CardMedia>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Typography variant='h5' align='center' color='textPrimary' paragraph>
					Doctor Placeholder
				</Typography>
				<Typography variant='body1' align='left' color='textPrimary' paragraph>
					A native of Valley Stream in Long Island, Dr. Placeholder has lived in
					Brooklyn since 2013. After getting his M.D. at EVMS in Norfolk, VA, he
					trained in Internal Medicine and Anesthesiology at Downstate Medical
					Center and Kings County Hospital. He began treating patients with
					medical marijuana in February 2018 and has since helped hundreds of
					patients in their journeys seeking relief from suffering.
				</Typography>
				<Typography variant='body1' align='left' color='textPrimary' paragraph>
					Kind, respectful, attentive, and patient, Dr. Placeholder melds the
					best practices of modern medicine with a human touch which embodies
					spirituality and a holistic view of health. Never rushed, always
					available—Dr. Placeholder can be your concierge to a natural, safer,
					and better way of medicine.
				</Typography>
			</Grid>
		</Grid>
	);
};
export default Doctor;
