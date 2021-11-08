import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import {
	Button,
	LinearProgress,
	Box,
	Divider,
	Card,
	Typography,
	Stack,
} from "@mui/material";

import CheckQuestion from "./CheckQuestion";
import MedicalQuestion from "./MedicalQuestion";
import BasicInfo from "./BasicInfo";
import Other from "./Other";
import { YupInit, YupSchema } from "../utils/FormValidation";
import { uploadForm } from "../utils/FormSubmission";

const cardPadding = { xs: 2, sm: 3, md: 4 };

const IntakeForm = (props) => {
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
			validationSchema={YupSchema}
			onSubmit={handleSubmit}
			validateOnChange={false}
		>
			{({ isSubmitting, setFieldValue, values }) => (
				<Stack spacing={2} component={Form}>
					<Box component={Card} p={cardPadding}>
						<Typography variant="h6">Basic Information</Typography>
						<Divider />
						<BasicInfo />
					</Box>
					<Box component={Card} p={cardPadding}>
						<Typography variant="h6">Medical Information</Typography>
						<Divider />
						<Box my={2}>
							<CheckQuestion />
						</Box>
						<Divider />
						<Box my={2}>
							<MedicalQuestion />
						</Box>
					</Box>
					<Box component={Card} p={cardPadding}>
						<Typography variant="h6">Documents</Typography>
						<Divider />
						<Box my={2}>
							<Other
								setFieldValue={setFieldValue}
								file1={values ? values.filesMed : null}
								file2={values ? values.fileID : null}
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
					</Box>
				</Stack>
			)}
		</Formik>
	);
};

export default IntakeForm;
