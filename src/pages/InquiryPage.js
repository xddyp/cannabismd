import { useEffect, useState, useRef } from "react";
import { Grid, TextField, MenuItem, Box } from "@mui/material";
import {
	getFirestore,
	collection,
	query,
	where,
	onSnapshot,
	orderBy,
	limit,
} from "firebase/firestore";
import SubLayout from "../components/UI/SubLayout";
import InquiryList from "../components/inquiry/InquiryList";
import InquiryTable from "../components/inquiry/InquiryTable";
import PatientTable from "../components/inquiry/PatientTable";
import PatientList from "../components/inquiry/PatientList";
import { CSVLink } from "react-csv";
import { handleMRN } from "../components/utils/FormUpdate";
import AddInquiry from "../components/inquiry/AddInquiry";
import { CSVConvert } from "../components/utils/CSVConvert";
import CertModal from "../components/UI/CertModal";
import InfoModal from "../components/UI/InfoModal";

const db = getFirestore();
const limits = [20, 40, 60, 80];

const InquiryPage = () => {
	const download = useRef();
	const [dataLimit, setDataLimit] = useState(20);
	const [tmpPatients, setTmpPatients] = useState(null);
	const [csvData, setCsvData] = useState([]);
	const [patients, setPatients] = useState([]);
	const [patient, setPatient] = useState();
	const [openInfoModal, setOpenInfoModal] = useState(false);
	const [openCertModal, setOpenCertModal] = useState(false);
	useEffect(() => {
		const q = query(collection(db, "patients"), where("mrn", "==", "c000000"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			setTmpPatients(querySnapshot.docs);
		});
		return () => unsubscribe();
	}, []);
	useEffect(() => {
		const q = query(
			collection(db, "patients"),
			where("mrn", "!=", "c000000"),
			orderBy("mrn", "desc"),
			limit(dataLimit)
		);
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			setPatients(querySnapshot.docs);
		});
		return () => unsubscribe();
	}, [dataLimit]);
	const handleLimitChange = (event) => {
		setDataLimit(event.target.value);
	};
	const downloadCsv = (p) => {
		setCsvData([CSVConvert(p)]);
		download.current.click();
		setCsvData([]);
	};
	const handleAddMrn = (p, id, newValues) => {
		p.mrn = newValues.mrn;
		p.dob = p.dob ? p.dob.toDate() : null;
		downloadCsv(p);
		handleMRN(id, newValues.mrn);
	};
	const handleNewManual = (p) => {
		downloadCsv(p);
	};
	// manage Modal
	const handleOpenInfoModal = (p) => {
		setPatient(p);
		setOpenInfoModal(true);
	};
	const handleCloseInfoModal = () => {
		setOpenInfoModal(false);
	};

	const handleOpenCertModal = (p) => {
		setPatient(p);
		setOpenCertModal(true);
	};
	const handleCloseCertModal = () => {
		setOpenCertModal(false);
	};
	return (
		<>
			{patient && (
				<InfoModal
					onOpen={openInfoModal}
					onClose={handleCloseInfoModal}
					patient={patient}
				/>
			)}
			{patient && (
				<CertModal
					onOpen={openCertModal}
					onClose={handleCloseCertModal}
					patient={patient}
				/>
			)}
			<SubLayout title="New Inquiries">
				<Box mb={2}>
					<form>
						<TextField
							id="standard-select"
							select
							label="Numbers of entries"
							value={dataLimit}
							onChange={handleLimitChange}
							sx={{ width: "30ch" }}
						>
							{limits.map((l) => (
								<MenuItem key={l} value={l}>
									{l}
								</MenuItem>
							))}
						</TextField>
					</form>
				</Box>
				<Grid container spacing={1}>
					<Grid item sm={12} md={7}>
						<PatientTable>
							{patients &&
								patients.map((p) => (
									<PatientList
										key={p.id}
										patient={p.data()}
										onOpen={handleOpenInfoModal.bind(null, p)}
										onAdd={handleOpenCertModal.bind(null, p)}
									/>
								))}
						</PatientTable>
					</Grid>
					<Grid item sm={12} md={5}>
						<AddInquiry onAddNew={handleNewManual} />
						<InquiryTable>
							{tmpPatients &&
								tmpPatients.map((doc) => (
									<InquiryList
										key={doc.id}
										patient={doc.data()}
										onAdd={handleAddMrn.bind(null, doc.data(), doc.id)}
									/>
								))}
						</InquiryTable>
						<div hidden>
							<CSVLink data={csvData}>
								<button ref={download}>Download</button>
							</CSVLink>
						</div>
					</Grid>
				</Grid>
			</SubLayout>
		</>
	);
};

export default InquiryPage;
