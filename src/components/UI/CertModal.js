import { Dialog, DialogContent, DialogTitle } from "@mui/material";

import UpdateCert from "../patients/UpdateCert";

const CertModal = (props) => {
	return (
		<>
			<Dialog
				open={props.onOpen}
				onClose={props.onClose}
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
				maxWidth="sm"
				fullWidth
			>
				<DialogTitle id="scroll-dialog-title" sx={{ textAlign: "center" }}>
					Certification History
				</DialogTitle>
				<DialogContent>
					<UpdateCert
						latest={props.patient.data().latest}
						history={props.patient.data().history}
						id={props.patient.id}
						onClick={props.onClose}
					/>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default CertModal;
