import { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
	getFirestore,
	collection,
	query,
	where,
	onSnapshot,
} from "firebase/firestore";

import SubLayout from "../components/UI/SubLayout";
import ReturnPatientList from "../components/return/ReturnPatientList";
import ReturnPatientTable from "../components/return/ReturnPatientTable";
import { NotesModal } from "../components/UI/Modal";
import CertModal from "../components/UI/CertModal";
import InfoModal from "../components/UI/InfoModal";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const db = getFirestore();
let month = new Date();
month.setDate(1);
month.setFullYear(month.getFullYear() - 1);

const ReturnPage = () => {
	const [selectedDate, setSelectedDate] = useState(month);
	const [patients, setPatients] = useState("");
	const [patient, setPatient] = useState("");
	const [openInfoModal, setOpenInfoModal] = useState(false);
	const [openCertModal, setOpenCertModal] = useState(false);
	const [openNotesModal, setOpenNotesModal] = useState(false);
	useEffect(() => {
		let start = new Date(selectedDate.setHours(0, 0, 0, 0));
		let end = new Date(start);
		end.setMonth(end.getMonth() + 1);
		const q = query(
			collection(db, "patients"),
			where("latest", ">=", start),
			where("latest", "<", end)
		);
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			setPatients(querySnapshot.docs);
		});
		return () => unsubscribe();
	}, [selectedDate]);
	const handleDateChange = (date) => {
		setSelectedDate(date);
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
	const handleOpenNotesModal = (p) => {
		setPatient(p);
		setOpenNotesModal(true);
	};
	const handleCloseNotesModal = () => {
		setOpenNotesModal(false);
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
			{patient && (
				<NotesModal
					onOpen={openNotesModal}
					onClose={handleCloseNotesModal}
					patient={patient}
				/>
			)}
			<SubLayout title="Patients Certified Last Year">
				<Box mb={3}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							openTo="month"
							views={["year", "month"]}
							label="Year and Month"
							value={selectedDate}
							onChange={handleDateChange}
							renderInput={(params) => (
								<TextField {...params} variant="standard" helperText={null} />
							)}
						/>
					</LocalizationProvider>
				</Box>
				<ReturnPatientTable>
					{patients
						? patients.map((p) => (
								<ReturnPatientList
									key={p.id}
									patient={p.data()}
									onOpen={handleOpenInfoModal.bind(null, p)}
									onAdd={handleOpenCertModal.bind(null, p)}
									onAddNotes={handleOpenNotesModal.bind(null, p)}
								/>
						  ))
						: null}
				</ReturnPatientTable>
			</SubLayout>
		</>
	);
};

export default ReturnPage;
