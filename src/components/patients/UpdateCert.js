import { Button, Box, Divider, Typography } from "@mui/material";
import NewCert from "./NewCert";
import { useState } from "react";
import { DeleteModal } from "../UI/Modal";
import { handleDeleteCert } from "../utils/FormUpdate";

const UpdateCert = (props) => {
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [deleteDate, setDeleteDate] = useState(null);
	const handleOpenDeleteModal = (date) => {
		setOpenDeleteModal(true);
		setDeleteDate(date);
	};
	const handleCloseDeleteModal = () => {
		setOpenDeleteModal(false);
	};
	const handleDelete = async () => {
		await handleDeleteCert(props.id, deleteDate, props.history);
		setOpenDeleteModal(false);
		props.onClick();
		setDeleteDate(null);
	};
	return (
		<>
			<DeleteModal
				onOpen={openDeleteModal}
				onClose={handleCloseDeleteModal}
				onDelete={handleDelete}
			/>
			{props.latest && (
				<Typography color="primary" variant="subtitle1" paragraph>
					LATEST: {props.latest.toDate().toDateString().slice(4)}
				</Typography>
			)}
			<Divider />
			{props.history &&
				props.history.map((date) => (
					<Box
						key={date.toString()}
						my={1}
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography>{date.toDate().toDateString().slice(4)}</Typography>
						<Button
							size="small"
							variant="outlined"
							onClick={handleOpenDeleteModal.bind(null, date)}
						>
							Delete
						</Button>
					</Box>
				))}
			<Divider />
			<Box my={2}>
				<NewCert
					id={props.id}
					history={props.history}
					onClick={props.onClick}
				/>
			</Box>
		</>
	);
};
export default UpdateCert;
