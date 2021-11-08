import { Formik, Form, FastField } from "formik";

import { Button, Box, Card } from "@mui/material";

import { TextFieldFormik } from "../UI/TextFieldFormik";
import { uploadForm } from "../utils/FormSubmission";
import { YupInit, YupSchemaManulAdd } from "../utils/FormValidation";
import { DatePickerFormik } from "../UI/TextFieldFormik";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const AddInquiry = (props) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await uploadForm(values);
		} catch (e) {
			console.log(e.message);
		}
		props.onAddNew(values);
		resetForm();
		setSubmitting(false);
	};
	return (
		<Box component={Card} p={2} mb={2} border={2} borderColor="primary.main">
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<Formik
					initialValues={YupInit}
					validationSchema={YupSchemaManulAdd}
					onSubmit={handleSubmit}
					validateOnChange={false}
				>
					{({ isSubmitting }) => (
						<Form>
							<Box
								sx={{
									"& .MuiTextField-root, .MuiFormControl-root": {
										m: 1,
										width: "46%",
									},
									mb: 1,
									mt: -1,
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
								/>
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
									component={DatePickerFormik}
									format="MM/dd/yyyy"
									views={["year", "month", "day"]}
									openTo="year"
									name="dob"
									label="Date of Birth"
								/>
								<FastField
									component={TextFieldFormik}
									name="mrn"
									type="text"
									label="MRN"
								/>
								<FastField
									component={TextFieldFormik}
									name="code"
									type="text"
									label="Code"
								/>
								<FastField
									component={TextFieldFormik}
									multiline
									name="notes"
									type="text"
									label="Notes"
								/>
							</Box>
							<Button
								variant="contained"
								disabled={isSubmitting}
								type="submit"
								fullWidth
								size="small"
							>
								Add
							</Button>
						</Form>
					)}
				</Formik>
			</LocalizationProvider>
		</Box>
	);
};

export default AddInquiry;
