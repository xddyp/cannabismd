import { TableCell, TableRow } from "@mui/material";
import AddMRN from "./AddMRN";

const InquiryList = (props) => {
	return (
		<TableRow>
			<TableCell>
				{props.patient.inquiry
					? props.patient.inquiry.toDate().toDateString().slice(4, 10)
					: null}
			</TableCell>
			<TableCell>
				{props.patient.first} {props.patient.last}
			</TableCell>
			<TableCell>
				<AddMRN onAdd={props.onAdd} />
			</TableCell>
		</TableRow>
	);
};

export default InquiryList;
