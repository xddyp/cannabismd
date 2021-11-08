import { TableCell, TableRow } from "@mui/material";

const DownloadList = (props) => {
	return (
		<TableRow>
			<TableCell>{props.mrn}</TableCell>
			<TableCell>
				{props.first} {props.last}
			</TableCell>
			<TableCell>
				{props.date && props.date.toDate().toDateString().slice(4)}
			</TableCell>
		</TableRow>
	);
};

export default DownloadList;
