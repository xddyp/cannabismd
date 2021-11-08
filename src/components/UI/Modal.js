import {
	Button,
	Dialog,
	DialogContent,
	DialogActions,
	DialogTitle,
	DialogContentText,
} from "@mui/material";

import UpdateNotes from "../patients/UpdateNotes";

export const NotesModal = (props) => {
	return (
		<Dialog
			open={props.onOpen}
			onClose={props.onClose}
			aria-labelledby="dialog-title"
			aria-describedby="dialog-description"
			maxWidth="sm"
			fullWidth
		>
			<DialogTitle id="scroll-dialog-title">Notes</DialogTitle>
			<DialogContent>
				<UpdateNotes
					notes={props.patient.data().notes}
					id={props.patient.id}
					onClick={props.onClose}
				/>
			</DialogContent>
		</Dialog>
	);
};

export const DeleteModal = (props) => {
	return (
		<Dialog
			open={props.onOpen}
			onClose={props.onClose}
			aria-labelledby="delete-title"
			aria-describedby="delete-description"
			maxWidth="xs"
			fullWidth
		>
			<DialogContent>
				<DialogContentText>Delete from database?</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.onDelete} color="primary">
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};
