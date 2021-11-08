import { Formik, Form, FastField } from "formik";
import { YupSchemaMrn } from "../utils/FormValidation";
import { Button, Stack } from "@mui/material";

import { TextFieldFormik } from "../UI/TextFieldFormik";

const AddMRN = (props) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		await props.onAdd(values);
		resetForm();
		setSubmitting(false);
	};
	return (
		<Formik
			initialValues={{ mrn: "" }}
			validationSchema={YupSchemaMrn}
			onSubmit={handleSubmit}
			validateOnChange={false}
		>
			{({ isSubmitting }) => (
				<Form>
					<Stack
						direction="row"
						alignItems="center"
						sx={{
							"& .MuiTextField-root": {
								maxWidth: "20ch",
							},
						}}
					>
						<FastField
							component={TextFieldFormik}
							name="mrn"
							type="text"
							label="MRN"
							required
						/>
						<Button
							variant="contained"
							disabled={isSubmitting}
							type="submit"
							size="small"
						>
							Add
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

export default AddMRN;
