import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	TableContainer,
	Button,
} from "@mui/material";

import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();

const handleDownload = (path) => {
	getDownloadURL(ref(storage, path))
		.then((url) => {
			const xhr = new XMLHttpRequest();
			xhr.responseType = "blob";
			xhr.onload = (event) => {
				var a = document.createElement("a");
				a.href = window.URL.createObjectURL(xhr.response);
				a.download = path.split("/").slice(-1)[0];
				a.style.display = "none";
				document.body.appendChild(a);
				a.click(); //Simulates a click event
				var blob = xhr.response;
			};
			xhr.open("GET", url);
			xhr.send();
		})
		.catch((error) => {
			// console.log(error);
			// Handle any errors
		});
};
const PatientInfo = (props) => {
	const values = [
		["Name", `${props.patient.first} ${props.patient.last}`],
		["MRN", props.patient.mrn],
		[
			"Certification History",
			props.patient.history
				? props.patient.history.map((date) => (
						<p key={date}>{date.toDate().toDateString().slice(4)}</p>
				  ))
				: null,
		],
		[
			"Latest Certification",
			props.patient.latest
				? props.patient.latest.toDate().toDateString().slice(4)
				: null,
		],
		[
			"Inquiry Date",
			props.patient.inquiry
				? props.patient.inquiry.toDate().toDateString().slice(4)
				: null,
		],
		[
			"Files",
			props.patient.files.map((path) => (
				<div key={path}>
					<Button
						onClick={handleDownload.bind(null, path)}
						size="small"
						variant="text"
						color="primary"
					>
						{path.split("/").slice(-1)[0]}
					</Button>
				</div>
			)),
		],
		["Notes", props.patient.notes],
		["Code", props.patient.code || ""],
		[
			"Phone",
			props.patient.phone
				? "(" +
				  props.patient.phone.slice(0, 3) +
				  ") " +
				  props.patient.phone.slice(3, 6) +
				  "-" +
				  props.patient.phone.slice(-4)
				: "",
		],
		["Email", props.patient.email],
		["Preferred contact", props.patient.communication],

		[
			"Preferred date",
			props.patient.appt
				? props.patient.appt.toDate().toDateString().slice(4)
				: null,
		],
		[
			"DOB",
			props.patient.dob
				? props.patient.dob.toDate().toDateString().slice(4)
				: null,
		],
		["Sex", props.patient.gender],
		[
			"Address",
			`${props.patient.street} ${props.patient.city} ${props.patient.state} ${props.patient.zip}`,
		],

		[
			"Qualifying Conditions",
			props.patient.conditions ? props.patient.conditions.join(", ") : null,
		],
		[
			"Other Conditions",
			props.patient.questions ? props.patient.questions.join(", ") : null,
		],
		["Comments", props.patient.comments],
	];

	return (
		<>
			<TableContainer>
				<Table size="small">
					<TableBody>
						{values.map((v) => (
							<TableRow key={v[0]}>
								<TableCell
									variant="head"
									sx={{
										whiteSpace: "normal",
										wordBreak: "break-word",
										minWidth: "25ch",
									}}
								>
									{v[0]}
								</TableCell>
								<TableCell
									sx={{
										whiteSpace: "normal",
										wordBreak: "break-word",
										minWidth: "25ch",
									}}
								>
									{v[1]}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
export default PatientInfo;
