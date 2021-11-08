import { Formik, Form, FastField } from "formik";
import { Button, LinearProgress, Box, MenuItem } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import CheckQuestion from "../intake-form/CheckQuestion";
import MedicalQuestion from "../intake-form/MedicalQuestion";
import { YupSchemaUpdate } from "../utils/FormValidation";
import { updateForm } from "../utils/FormUpdate";
import { DatePickerFormik, TextFieldFormik } from "../UI/TextFieldFormik";

const ways = ["Call", "Text", "Email"];

const EditForm = (props) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await updateForm(props.id, values);
		} catch (e) {
			console.log(e.message);
		}
		// resetForm();
		setSubmitting(false);
		// window.location.reload();
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Formik
				initialValues={props.yupInit}
				validationSchema={YupSchemaUpdate}
				onSubmit={handleSubmit}
				validateOnChange={false}
			>
				{({ isSubmitting }) => (
					<Form>
						<Box
							sx={{
								"& .MuiTextField-root, .MuiFormControl-root": {
									m: 1,
									width: "100%",
								},
							}}
						>
							<FastField
								component={TextFieldFormik}
								name="notes"
								type="text"
								label="Notes"
								multiline
							/>
						</Box>
						<Box
							sx={{
								"& .MuiTextField-root, .MuiFormControl-root": {
									m: 1,
									width: "30%",
								},
							}}
						>
							<FastField
								component={TextFieldFormik}
								name="mrn"
								type="text"
								label="MRN"
							/>

							<FastField
								component={TextFieldFormik}
								name="first"
								type="text"
								label="First Name"
							/>
							<FastField
								component={TextFieldFormik}
								name="last"
								type="text"
								label="Last Name"
							/>
							<FastField
								component={TextFieldFormik}
								name="code"
								type="text"
								label="Code"
							/>
							<FastField
								component={DatePickerFormik}
								format="MM/dd/yyyy"
								views={["year", "month", "day"]}
								openTo="year"
								name="dob"
								label="Date of Birth"
								variant="inline"
							/>
							<FastField
								component={TextFieldFormik}
								label="Sex"
								type="text"
								name="gender"
								select={true}
							>
								<MenuItem value="Female">Female</MenuItem>
								<MenuItem value="Male">Male</MenuItem>
								<MenuItem value="Intersex">Intersex</MenuItem>
								<MenuItem value="Other">Other</MenuItem>
							</FastField>
							<FastField
								component={TextFieldFormik}
								name="phone"
								type="tel"
								label="Phone"
							/>
							<FastField
								component={TextFieldFormik}
								name="email"
								type="email"
								label="Email"
							/>
							<FastField
								component={TextFieldFormik}
								label="Preferred"
								type="text"
								name="communication"
								select={true}
							>
								{ways.map((c) => (
									<MenuItem value={c} key={c}>
										{c}
									</MenuItem>
								))}
							</FastField>
						</Box>
						<Box
							sx={{
								"& .MuiTextField-root, .MuiFormControl-root": {
									m: 1,
									width: "100%",
								},
							}}
						>
							<FastField
								component={TextFieldFormik}
								multiline
								name="street"
								type="text"
								label="Address"
							/>
						</Box>
						<Box
							sx={{
								"& .MuiTextField-root, .MuiFormControl-root": {
									m: 1,
									width: "30%",
								},
							}}
						>
							<FastField
								component={TextFieldFormik}
								name="city"
								type="text"
								label="City"
							/>
							<FastField
								component={TextFieldFormik}
								name="state"
								type="text"
								label="State"
							/>
							<FastField
								component={TextFieldFormik}
								name="zip"
								type="text"
								label="Zip Code"
							/>
						</Box>

						<Box my={3}>
							<CheckQuestion />
						</Box>
						<Box>
							<MedicalQuestion />
						</Box>
						{isSubmitting && <LinearProgress />}
						<Box mt={4}>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								disabled={isSubmitting}
								type="submit"
							>
								Update
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</LocalizationProvider>
	);
};

export default EditForm;
