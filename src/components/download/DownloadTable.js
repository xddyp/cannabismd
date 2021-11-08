import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
} from "@mui/material";

const DownloadTable = (props) => {
	return (
		<TableContainer component={Paper} border={1}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>MRN</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Certification /Inquiry Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{props.children}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DownloadTable;
