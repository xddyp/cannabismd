import { Grid } from '@mui/material';
import FeatureCard from '../UI/FeatureCard';
import {
	faCapsules,
	faFileMedical,
	faUserMd,
	faPrescription,
	faClinicMedical,
	faHistory,
} from '@fortawesome/free-solid-svg-icons';
import { GridThree } from '../UI/Grid';

const features = [
	{
		title: 'In-Person Office Visits',
		icon: faUserMd,
		description:
			'Patients are welcome to visit our office in Downtown Brooklyn for their consultation with Dr. Placeholder. He will conduct a complete review of your medical history with a focus on any qualifying conditions you have for the Medical Marijuana Program, in addition to providing the other services listed here.',
	},
	{
		title: 'Dosing Recommendations',
		icon: faCapsules,
		description:
			'Dr. Placeholder assists with formulating a marijuana regimen that achieves your therapeutic goals. Dispensary product offerings (THC vs CBD ratios, strain types, different methods of administration) are explained in detail and dosing regimens are carefully crafted. Changes to your regimen can be discussed with Dr. Placeholder on a direct and ongoing basis.',
	},
	{
		title: 'Dispensary Information',
		icon: faPrescription,
		description:
			'First-rate advice regarding all dispensaries in New York including detailed menu guidance, brand and product availability, deals and discounts, locations, delivery options, and more. Direct coordination of care between Dr. Placeholder and the regular pharmacist at any specific dispensary is available upon request.',
	},
	{
		title: 'Online Telemedicine Visits',
		icon: faClinicMedical,
		description:
			'If preferred, online telemedicine visits are also available. To schedule an online visit, fill out the intake form on this site, or call our office directly at (123) 456-7890. Upon setting a date and time, an email confirmation with a the link for a video chat will sent to you.',
	},
	{
		title: 'Registration Assistance',
		icon: faFileMedical,
		description:
			'Direct, step-by-step assistance with your card registration and an extensive array of information with regards to the rules and regulations surrounding the NYS Medical Marijuana Program.',
	},

	{
		title: 'Same-Day Certification and Card',
		icon: faHistory,
		description:
			'If medically appropriate, Doctor Placeholder will print and sign your certification the same day. Upon successful registration on the my.ny.gov site, a downloadable temporary card allows for same-day visits to the dispensary of your choice. (A permanent card follows in the mail within 7-10 business days.)',
	},
];

const Features = () => {
	return (
		<Grid container spacing={2}>
			{features.map((f, index) => (
				<GridThree key={index}>
					<FeatureCard feature={f} />
				</GridThree>
			))}
		</Grid>
	);
};
export default Features;
