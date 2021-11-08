import { Formik, Form, FastField } from "formik";

import { Button, LinearProgress, Box } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { YupSchemaUpdate } from "../utils/FormValidation";
import { handleNotes } from "../utils/FormUpdate";
import { TextFieldFormik } from "../UI/TextFieldFormik";

const UpdateNotes = (props) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await handleNotes(props.id, values.notes);
		} catch (e) {
			console.log(e.message);
		}
		resetForm();
		setSubmitting(false);
		props.onClick();
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Formik
				initialValues={{ notes: props.notes }}
				validationSchema={YupSchemaUpdate}
				onSubmit={handleSubmit}
				validateOnChange={false}
			>
				{({ isSubmitting }) => (
					<Form>
						<FastField
							component={TextFieldFormik}
							name="notes"
							type="text"
							label="Notes"
							multiline
							fullWidth
							rows={15}
						/>
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

export default UpdateNotes;
