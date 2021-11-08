import { useEffect, useState } from "react";

import { Grid, Box, Typography, Divider, Card } from "@mui/material";
import { getFirestore, onSnapshot, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import EditForm from "../components/patients/EditForm";
import Section from "../components/UI/Section";
import UpdateCert from "../components/patients/UpdateCert";
import UpdateFiles from "../components/patients/UpdateFiles";

const db = getFirestore();

const PatientPage = (props) => {
	const [patient, setPatient] = useState("");
	const { id } = useParams();
	useEffect(() => {
		const docRef = doc(db, "patients", id);
		const unsubscribe = onSnapshot(docRef, (doc) => {
			setPatient({
				...doc.data(),
				dob: doc.data().dob ? doc.data().dob.toDate() : null,
			});
		});
		return () => unsubscribe();
	}, [id]);

	return (
		<Section bgcolor="primary.main">
			{patient && (
				<Grid container spacing={1}>
					<Grid item sm={12} md={7}>
						<Box p={3} component={Card}>
							<Typography variant="h6" align="center" paragraph>
								Basic Information
							</Typography>
							<Divider />
							<EditForm yupInit={patient} id={id} />
						</Box>
					</Grid>
					<Grid item sm={12} md={5}>
						<Box p={3} component={Card} mb={2}>
							<Typography variant="h6" align="center" paragraph>
								Certification History
							</Typography>
							<UpdateCert
								latest={patient.latest}
								history={patient.history}
								id={id}
								onClick={() => {}}
							/>
						</Box>
						{patient.files && (
							<Box p={3} component={Card}>
								<Typography variant="h6" align="center" paragraph>
									Files
								</Typography>
								<Divider />
								<UpdateFiles files={patient.files} id={id} />
							</Box>
						)}
					</Grid>
				</Grid>
			)}
		</Section>
	);
};

// export default withRouter(PatientPage);
export default PatientPage;
