import { useState, useEffect } from "react";
import { onSnapshot } from "@firebase/firestore";
import { Stack, Typography } from "@mui/material";

import SubLayout from "../components/UI/SubLayout";
import ReturnPatientList from "../components/return/ReturnPatientList";
import ReturnPatientTable from "../components/return/ReturnPatientTable";
import CertModal from "../components/UI/CertModal";
import InfoModal from "../components/UI/InfoModal";
import SearchByName from "../components/search/SearchByName";
import { NotesModal } from "../components/UI/Modal";
import { fetchByNameOrMrn } from "../components/utils/FormFetch";

const SearchPage = () => {
	const [patients, setPatients] = useState("");
	const [patient, setPatient] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [openInfoModal, setOpenInfoModal] = useState(false);
	const [openCertModal, setOpenCertModal] = useState(false);
	const [openNotesModal, setOpenNotesModal] = useState(false);

	const handleSearch = (values) => {
		setSearchQuery(fetchByNameOrMrn(values));
	};
	useEffect(() => {
		if (searchQuery) {
			const unsubscribe = onSnapshot(searchQuery, (querySnapshot) => {
				setPatients(querySnapshot.docs);
			});
			return () => unsubscribe();
		}
	}, [searchQuery]);
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
			<SubLayout title="Search By Name or MRN">
				<Stack spacing={2}>
					<SearchByName onSearch={handleSearch} />
					{!patients && (
						<Typography variant="h6" paragraph>
							No Result
						</Typography>
					)}
					{patients && (
						<ReturnPatientTable>
							{patients.map((p) => (
								<ReturnPatientList
									key={p.id}
									patient={p.data()}
									onOpen={handleOpenInfoModal.bind(null, p)}
									onAdd={handleOpenCertModal.bind(null, p)}
									onAddNotes={handleOpenNotesModal.bind(null, p)}
								/>
							))}
						</ReturnPatientTable>
					)}
				</Stack>
			</SubLayout>
		</>
	);
};
export default SearchPage;
