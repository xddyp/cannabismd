import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
} from "@mui/material";

const PatientTable = (props) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>MRN</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Inquired</TableCell>
						<TableCell>Detail</TableCell>
						<TableCell>New Certification</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{props.children}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default PatientTable;
