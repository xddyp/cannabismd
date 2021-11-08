import { TableCell, TableRow, Button } from "@mui/material";

const ReturnPatientList = (props) => {
	return (
		<TableRow>
			<TableCell>{props.patient.mrn}</TableCell>
			<TableCell>
				{props.patient.first} {props.patient.last}
			</TableCell>
			<TableCell>
				{props.patient.latest &&
					props.patient.latest.toDate().toDateString().slice(4)}
			</TableCell>
			<TableCell>
				<Button
					color="primary"
					variant="contained"
					size="small"
					onClick={props.onOpen}
				>
					Open
				</Button>
			</TableCell>
			<TableCell>
				<Button
					color="primary"
					variant="outlined"
					size="small"
					onClick={props.onAdd}
				>
					Add Certification
				</Button>
			</TableCell>
			<TableCell
				sx={{
					whiteSpace: "normal",
					wordBreak: "break-word",
					minWidth: "25ch",
					maxWidth: "60ch",
				}}
			>
				{props.patient.notes}
				<Button
					color="primary"
					variant="text"
					size="small"
					onClick={props.onAddNotes}
				>
					Edit
				</Button>
			</TableCell>
		</TableRow>
	);
};

export default ReturnPatientList;
