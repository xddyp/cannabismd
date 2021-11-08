import { TableCell, TableRow, Button } from "@mui/material";

const PatientList = (props) => {
	return (
		<TableRow>
			<TableCell>{props.patient.mrn}</TableCell>
			<TableCell>
				{props.patient.first} {props.patient.last}
			</TableCell>
			<TableCell>
				{props.patient.inquiry
					? props.patient.inquiry.toDate().toDateString().slice(4, 10)
					: null}
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
		</TableRow>
	);
};

export default PatientList;
