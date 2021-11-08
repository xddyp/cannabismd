import { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
	getFirestore,
	collection,
	query,
	where,
	onSnapshot,
} from "firebase/firestore";
import { CSVLink } from "react-csv";

import SubLayout from "../components/UI/SubLayout";
import DownloadTable from "../components/download/DownloadTable";
import DownloadList from "../components/download/DownloadList";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { CSVCovertForDownload } from "../components/utils/CSVConvert";

const db = getFirestore();
let month = new Date();
month.setDate(1);
month.setMonth(month.getMonth() - 1);

const DownloadPage = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [inquiryPatients, setInquiryPatients] = useState("");
	const [certifiedPatients, setCertifiedPatients] = useState("");
	useEffect(() => {
		if (selectedDate) {
			let start = new Date(selectedDate.setDate(1));
			start.setHours(0, 0, 0, 0);
			let end = new Date(start);
			end.setMonth(end.getMonth() + 1);
			const q = query(
				collection(db, "patients"),
				where("inquiry", ">=", start),
				where("inquiry", "<", end)
			);
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				setInquiryPatients(querySnapshot.docs);
			});
			return () => unsubscribe();
		}
	}, [selectedDate]);
	useEffect(() => {
		if (selectedDate) {
			let start = new Date(selectedDate.setHours(0, 0, 0, 0));
			let end = new Date(start);
			end.setMonth(end.getMonth() + 1);
			const q = query(
				collection(db, "patients"),
				where("latest", ">=", start),
				where("latest", "<", end)
			);
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				setCertifiedPatients(querySnapshot.docs);
			});
			return () => unsubscribe();
		}
	}, [selectedDate]);
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<>
			<SubLayout title="Download Inquiry and Certification Records">
				<Box mb={3}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							openTo="month"
							views={["year", "month"]}
							label="Year and Month"
							value={selectedDate}
							onChange={handleDateChange}
							renderInput={(params) => (
								<TextField {...params} variant="standard" helperText={null} />
							)}
						/>
					</LocalizationProvider>
				</Box>

				<Stack direction={{ xs: "column", md: "row" }} spacing={2}>
					<Stack spacing={1}>
						<Typography variant="h6" align="center">
							Inquiry
						</Typography>
						{inquiryPatients && (
							<CSVLink
								data={CSVCovertForDownload(inquiryPatients)}
								filename={`${selectedDate.getFullYear()}-${
									selectedDate.getMonth() + 1
								}-inquiry.csv`}
							>
								<Button fullWidth variant="contained">
									Download
								</Button>
							</CSVLink>
						)}
						<DownloadTable>
							{inquiryPatients
								? inquiryPatients.map((p) => (
										<DownloadList
											key={p.id}
											mrn={p.data().mrn}
											first={p.data().first}
											last={p.data().last}
											date={p.data().inquiry}
										/>
								  ))
								: null}
						</DownloadTable>
					</Stack>
					<Stack spacing={1}>
						<Typography variant="h6" align="center">
							Certification
						</Typography>
						{certifiedPatients && (
							<CSVLink
								data={CSVCovertForDownload(certifiedPatients)}
								filename={`${selectedDate.getFullYear()}-${
									selectedDate.getMonth() + 1
								}-certification.csv`}
							>
								<Button fullWidth variant="contained">
									Download
								</Button>
							</CSVLink>
						)}
						<DownloadTable>
							{certifiedPatients
								? certifiedPatients.map((p) => (
										<DownloadList
											key={p.id}
											mrn={p.data().mrn}
											first={p.data().first}
											last={p.data().last}
											date={p.data().latest}
										/>
								  ))
								: null}
						</DownloadTable>
					</Stack>
				</Stack>
			</SubLayout>
		</>
	);
};

export default DownloadPage;
