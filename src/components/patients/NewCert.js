import { Formik, Form, FastField } from "formik";
import * as yup from "yup";

import { Button, LinearProgress, Box } from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { handleNewCert } from "../utils/FormUpdate";
import { DatePickerFormik } from "../UI/TextFieldFormik";

const NewCert = (props) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		await handleNewCert(props.id, values.certDate, props.history);
		props.onClick();
		resetForm();
		setSubmitting(false);
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Formik
				initialValues={{
					certDate: new Date(),
				}}
				validationSchema={yup.object().shape({
					certDate: yup.date().nullable(),
				})}
				onSubmit={handleSubmit}
				validateOnChange={false}
			>
				{({ isSubmitting }) => (
					<Form>
						<FastField
							component={DatePickerFormik}
							name="certDate"
							label="New Certification Date"
						/>
						{isSubmitting && <LinearProgress />}
						<Box my={3}>
							<Button
								variant="contained"
								color="primary"
								fullWidth
								disabled={isSubmitting}
								type="submit"
							>
								Add New Certification
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</LocalizationProvider>
	);
};

export default NewCert;
