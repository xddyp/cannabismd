import { Link as RouterLink } from "react-router-dom";

import { useState } from "react";
import {
	Button,
	Dialog,
	DialogContent,
	DialogActions,
	DialogTitle,
} from "@mui/material";

import PatientInfo from "../patients/PatientInfo";
import { DeleteModal } from "./Modal";
import { deleteForm } from "../utils/FormDelete";

const InfoModal = (props) => {
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const handleOpenDeleteModal = () => {
		setOpenDeleteModal(true);
	};
	const handleCloseDeleteModal = () => {
		setOpenDeleteModal(false);
	};
	const handleDelete = async () => {
		await deleteForm(props.patient.ref, props.patient.data().files);
		setOpenDeleteModal(false);
		props.onClose();
	};
	return (
		<>
			<DeleteModal
				onOpen={openDeleteModal}
				onClose={handleCloseDeleteModal}
				onDelete={handleDelete}
			/>
			<Dialog
				open={props.onOpen}
				onClose={props.onClose}
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
				maxWidth="sm"
				fullWidth
			>
				<DialogTitle id="scroll-dialog-title" sx={{ textAlign: "center" }}>
					Information
				</DialogTitle>
				<DialogContent>
					<PatientInfo patient={props.patient.data()} />
				</DialogContent>
				<DialogActions>
					<Button color="primary">
						<RouterLink
							to={props.patient.ref.path}
							target="_blank"
							rel="noopener noreferrer"
						>
							Edit
						</RouterLink>
					</Button>
					<Button onClick={handleOpenDeleteModal} color="primary">
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export default InfoModal;
