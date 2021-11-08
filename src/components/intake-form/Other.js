import { FastField, ErrorMessage } from 'formik';
import { useState } from 'react';

import {
	Button,
	Box,
	Divider,
	Typography,
	Modal,
	Chip,
	Stack,
} from '@mui/material';

import { CheckboxFormik } from '../UI/TextFieldFormik';

const term = (
	<>
		<h2 id='simple-modal-title'>Terms and conditions</h2>
		<p id='simple-modal-description'>
			Please read each item below and sign at the bottom of this form to
			indicate you understand the information regarding the risks and side
			effects of using marijuana. I agree to tell the attending physician if I
			do not understand any of the information provided. <br />
			1. I understand that the cultivation, possession and use of marijuana,
			even for medical purposes, are currently ILLEGAL UNDER FEDERAL LAW.
			<br />
			2. Under federal and state law, it is not permitted to use or possess
			marijuana within 1000 feet of a daycare or school. I agree not to do so.
			<br />
			3. I agree not to use marijuana while under the influence of alcohol.
			<br />
			4. I understand that it is against the law to drive a vehicle while using
			marijuana and that doing so will result in a DUI for driving under the
			influence.
			<br />
			5. I agree to tell the attending physician if I have ever had symptoms of
			depression, been psychotic, attempted suicide or had any other mental
			problems. I also agree to tell the attending physician if I have ever been
			prescribed or taken medicine for any of the conditions stated above.
			Furthermore, I understand that the attending physician does not suggest
			nor condone that I cease treatment and/or medication that stabilize my
			mental or physical condition.
			<br />
			6. I agree to immediately stop using marijuana and inform the physician in
			the event I become suicidal, homicidal, paranoid, or have an increase in
			any of these symptoms.
			<br />
			7. There are few known interactions between marijuana and medications or
			other herbs. However, very few interactions between herbs and marijuana
			have been studied. I agree to tell my attending physician if I am using
			any herbs, supplements, or other medications.
			<br />
			8. Some users might develop a tolerance to marijuana. This means higher
			and higher doses are required to achieve the same clinical effect. It is
			recommended for doctors to have an intermission with drug for at least 3
			weeks every 3-4 months. If I think I may be developing a tolerance to
			marijuana, I will notify my attending physician.
			<br />
			9. Should respiratory problems or other ill effects be experience in
			association with the use of medical marijuana, I agree to discontinue its
			use and report any or report such problems or effects to the attending
			physician. Although smoking marijuana has not been linked to lung cancer,
			smoking marijuana can cause respiratory harm, such as bronchitis. Many
			researchers agree that marijuana smoke can cause respiratory harm, such as
			bronchitis. Many researchers agree that marijuana smoke contains known
			carcinogens (chemicals that can cause cancer), and that smoking marijuana
			may increase the risk of respiratory diseases and cancers of the lungs,
			mouth, and tongue. I have been advised that cannabis (medical marijuana)
			smoke contains chemicals known as tars that may be harmful to my health.
			Vaporizers may substantially reduce many of the potentially harmful smoke
			and toxins that are normally present in marijuana smoke.
			<br />
			10. Marijuana varies in potency. The effects of marijuana can also vary
			with the delivery system. Estimating the proper marijuana dosage is very
			important. Symptoms of marijuana overdose include, but are not limited to,
			nausea, vomiting, hacking cough, disturbances to heart rhythms, and
			numbness in the limbs.
			<br />
			11. The efficacy and potency of marijuana varies widely depending on the
			marijuana strain and ingestion method. Under federal law, the attending
			physician is unable to discuss dosage.
			<br />
			12. I agree to use birth control while using marijuana. In the event I
			become pregnant, I agree to immediately discontinue use of marijuana and
			contact the physician. (Females only)
			<br />
			13. Cannabis is not regulated by the USFDA and therefore may contain
			unknown quantities of active ingredients, impurities, and/or contaminants.
			<br />
			14. I intend to obtain and use medical marijuana in the State of New York
			for my medical condition should medical marijuana be recommended for my
			condition.
			<br />
			15. I understand that side effects may occur while I am taking medical
			marijuana which can include but are not limited to: short-term memory
			loss, anxiety/nervousness, irregular heart beat, dry mouth, slower
			reaction time, impairment of motor skills coordination, poor physical
			coordination, hunger, loss of appetite, dizziness, cough, dependency,
			confusion, impaired vision, feeling of euphoria, tiredness or drowsiness,
			headache, nausea or vomiting, apathy, change in sleeping patterns,
			numbness, laryngitis, bronchitis, depression, agitation or irritability,
			trouble concentrating, high or low blood pressure, sedation, difficulty
			completing complex tasks, paranoia or psychotic symptoms (i.e.,
			delusions), suppression of immune system, talkativeness I understand there
			may be benefits and risks associated with marijuana use that have not been
			identified. If I start taking medical marijuana, I agree to immediately
			tell my physician if I: start to feel sad or have crying spells, lose
			interest in my usual activities, have changes in my normal sleep patterns,
			lose my appetite, withdraw from family and friends, become more irritable
			than usual, become pregnant or start breastfeeding, become unusually
			tired.
			<br />
			Your personal statement regarding the provided facts: I confirm that the
			information provided by me regarding my diagnosis and medical records is
			true and correct.
		</p>
	</>
);
const Other = (props) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleUploadMed = (event) => {
		props.setFieldValue('filesMed', Array.from(event.target.files));
	};
	const handleUploadID = (event) => {
		props.setFieldValue('fileID', Array.from(event.target.files));
	};
	return (
		<>
			<Box my={2}>
				<Typography variant='subtitle1' color='textPrimary'>
					Please share any medical records with us pertaining to your medical
					condition.
				</Typography>
				<Typography variant='body1' paragraph>
					1. Please limit total attachement size submitted to under 25MB.
					<br />
					2. Hold Ctrl to upload more than one file.
				</Typography>
				<Box sx={{ display: 'none' }}>
					<input
						id='filesMed'
						multiple
						type='file'
						name='filesMed'
						onChange={handleUploadMed}
					/>
				</Box>
				<label htmlFor='filesMed'>
					<Button variant='contained' color='primary' component='span'>
						Upload
					</Button>
				</label>
				<Stack direction='row' pt={1}>
					{props.file1 &&
						props.file1.map((f) => (
							<Chip label={f.name} size='small' key={f.name} />
						))}
				</Stack>
				<Typography color='error'>
					<ErrorMessage name='filesMed' />
				</Typography>
			</Box>
			<Divider />
			<Box my={2}>
				<Typography variant='subtitle1' color='textPrimary'>
					Please upload a clear picture of a government-issued ID
				</Typography>

				<Typography variant='body1' paragraph>
					1. Preferably DMV-issued NY State ID such as driver license, learner
					permit, or non-driver ID, but other state IDs, passports, etc. are
					also acceptable.
					<br /> 2. Please limit total attachement size submitted to under 25MB.
				</Typography>
				<Box sx={{ display: 'none' }}>
					<input
						id='fileID'
						type='file'
						name='fileID'
						onChange={handleUploadID}
					/>
				</Box>
				<label htmlFor='fileID'>
					<Button variant='contained' component='span'>
						Upload
					</Button>
				</label>
				<Stack direction='row' pt={1}>
					{props.file2 &&
						props.file2.map((f) => (
							<Chip label={f.name} size='small' key={f.name} />
						))}
				</Stack>
				<Typography color='error'>
					<ErrorMessage name='fileID' />
				</Typography>
			</Box>
			<Typography
				variant='subtitle1'
				color='primary'
				sx={{ a: { color: '#2d51a3' } }}
				paragraph
			>
				If you have trouble uploading files, please email{' '}
				<a href='mailto: ask@cannabismd.demo'>ask@cannabismd.demo</a> or call
				(123) 456-7890 for assistance.
			</Typography>
			<Divider />
			<Box my={2}>
				<Button
					size='large'
					variant='text'
					onClick={handleOpen}
					sx={{ textDecoration: 'underline' }}
				>
					Terms and Conditions
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='simple-modal-title'
					aria-describedby='simple-modal-description'
				>
					<Box
						sx={{
							position: 'absolute',
							top: '20%',
							bottom: '20%',
							left: '10%',
							right: '10%',
							width: '80%',
							m: 'auto',
							maxWidth: '1200px',
							bgcolor: 'white',
							p: 4,
							overflow: 'scroll',
						}}
					>
						{term}
					</Box>
				</Modal>
				<Box mt={2}>
					<FastField
						type='checkbox'
						name='agreement'
						required
						component={CheckboxFormik}
						Label={{
							label:
								'I have reviewed my information and ead the legal terms above, agree to use Telemedicine as a means of communication with my doctor, and have been informed about the risk of cannabis use.',
						}}
					/>
				</Box>
			</Box>
		</>
	);
};
export default Other;
