import { FastField } from "formik";

import {
	FormLabel,
	FormControlLabel,
	Box,
	Typography,
	FormControl,
} from "@mui/material";

import { SwitchFormik, TextFieldFormik } from "../UI/TextFieldFormik";

const questions = [
	{ q: "Are you taking any other medications?", id: "Medication" },
	{
		q: "Have you ever been diagnosed with schizophrenia?",
		id: "Schizophrenia",
	},
	{
		q: "Have you ever experienced hallucinations before?",
		id: "Hallucinations",
	},
	{ q: "Do you smoke cigarettes?", id: "Smoking" },
	{ q: "Do you drink alcohol?", id: "Drinking" },
	{ q: "Are you pregnant?", id: "Pregnant" },
	{ q: "Are you currently nursing a child?", id: "Nursing" },
];

const MedicalQuestion = () => {
	return (
		<>
			<FormControl>
				<FormLabel>
					<Typography variant="subtitle1" color="textPrimary">
						Please review following questions.
					</Typography>
				</FormLabel>
				{questions.map((question) => (
					<FormControlLabel
						control={
							<FastField
								component={SwitchFormik}
								type="checkbox"
								name="questions"
								value={question.id}
							/>
						}
						labelPlacement="end"
						label={question.q}
						key={question.id}
					/>
				))}
			</FormControl>
			<Box mt={2}>
				<FastField
					component={TextFieldFormik}
					multiline
					rows={4}
					name="comments"
					type="text"
					fullWidth
					label="Please enter any additional medical information that you want to share
				with us."
					variant="outlined"
				/>
			</Box>
		</>
	);
};
export default MedicalQuestion;
