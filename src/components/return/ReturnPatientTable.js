import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
} from "@mui/material";

const ReturnPatientTable = (props) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>MRN</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Last Certification</TableCell>
						<TableCell>Detail</TableCell>
						<TableCell>New Certification</TableCell>
						<TableCell>Notes</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{props.children}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ReturnPatientTable;
