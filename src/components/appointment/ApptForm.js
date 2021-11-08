import { useHistory } from "react-router-dom";
import { Formik, Form, FastField } from "formik";
import {
	Button,
	LinearProgress,
	Box,
	MenuItem,
	TextField,
} from "@mui/material";

import { YupInit, YupSchemaContact } from "../utils/FormValidation";
import { uploadForm } from "../utils/FormSubmission";
import { DatePickerFormik, TextFieldFormik } from "../UI/TextFieldFormik";

const ways = ["Call", "Text", "Email"];

const ApptForm = (props) => {
	const history = useHistory();
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await uploadForm(values);
			history.replace("/thankyou");
		} catch (e) {
			props.passError(e.message);
		}
		resetForm();
		setSubmitting(false);
	};
	return (
		<Formik
			initialValues={YupInit}
			validationSchema={YupSchemaContact}
			onSubmit={handleSubmit}
			validateOnChange={false}
		>
			{({ isSubmitting }) => (
				<Form>
					<Box
						sx={{
							"& .MuiTextField-root, .MuiFormControl-root": {
								m: 1,
								width: { xs: "100%", sm: "46%" },
							},
						}}
					>
						<FastField
							component={TextFieldFormik}
							name="first"
							type="text"
							label="First Name"
							required
						/>
						<FastField
							component={TextFieldFormik}
							name="last"
							type="text"
							label="Last Name"
							required
						/>
						<FastField
							component={TextFieldFormik}
							name="phone"
							type="tel"
							label="Phone"
							required
						/>
						<FastField
							component={TextFieldFormik}
							name="email"
							type="email"
							label="Email"
							required
						/>
						<FastField
							component={TextFieldFormik}
							label="Best Way to Reach You"
							type="text"
							name="communication"
							select
						>
							{ways.map((c) => (
								<MenuItem value={c} key={c}>
									{c}
								</MenuItem>
							))}
						</FastField>
						<FastField
							component={DatePickerFormik}
							name="appt"
							label="Preferred Appointment Date"
						/>
					</Box>
					<Box mt={2} mx={1}>
						<FastField
							component={TextFieldFormik}
							multiline
							rows={4}
							name="comments"
							type="text"
							fullWidth
							label="Please enter any additional questions or information"
							variant="outlined"
						/>
					</Box>
					{isSubmitting && <LinearProgress />}
					<Box my={3} align="center">
						<Button
							fullWidth
							variant="contained"
							color="primary"
							disabled={isSubmitting}
							type="submit"
						>
							Submit
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};
export default ApptForm;
