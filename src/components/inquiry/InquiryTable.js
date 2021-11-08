import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Paper,
} from "@mui/material";

const InquiryTable = (props) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Add</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{props.children}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default InquiryTable;
