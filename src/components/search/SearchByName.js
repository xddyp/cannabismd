import { Formik, Form, FastField } from "formik";
import { LinearProgress, Button, Stack } from "@mui/material";
import { YupSchemaSearch } from "../utils/FormValidation";
import { TextFieldFormik } from "../UI/TextFieldFormik";

const SearchByName = (props) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		props.onSearch(values);
		resetForm();
		setSubmitting(false);
	};

	return (
		<Formik
			initialValues={{ first: "", last: "", mrn: "", code: "" }}
			validationSchema={YupSchemaSearch}
			onSubmit={handleSubmit}
			validateOnChange={false}
		>
			{({ isSubmitting }) => (
				<Form>
					<Stack direction="row" alignItems="center" spacing={1}>
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
						<Button
							variant="contained"
							color="primary"
							disabled={isSubmitting}
							type="submit"
						>
							Submit
						</Button>
						{isSubmitting && <LinearProgress />}
					</Stack>
				</Form>
			)}
		</Formik>
	);
};
export default SearchByName;
