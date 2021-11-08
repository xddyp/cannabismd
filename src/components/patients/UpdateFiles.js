import { Button, Box } from "@mui/material";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { deleteFiles } from "../utils/FormDelete";
import { useState } from "react";
import { DeleteModal } from "../UI/Modal";
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
			console.log(error);
			// Handle any errors
		});
};

const UpdateFiles = (props) => {
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const handleOpenDeleteModal = (date) => {
		setOpenDeleteModal(true);
	};
	const handleCloseDeleteModal = () => {
		setOpenDeleteModal(false);
	};
	const handleDelete = async () => {
		await deleteFiles(props.id, props.files);
		setOpenDeleteModal(false);
	};
	return (
		<>
			<DeleteModal
				onOpen={openDeleteModal}
				onClose={handleCloseDeleteModal}
				onDelete={handleDelete}
			/>
			{props.files.map((path) => (
				<Box key={path} my={1}>
					<Button
						onClick={handleDownload.bind(null, path)}
						small
						variant="outlined"
						color="secondary"
						fullWidth
					>
						Download {path.split("/").slice(-1)[0]}
					</Button>
					<span></span>
				</Box>
			))}
			<Button
				variant="contained"
				color="primary"
				fullWidth
				onClick={handleOpenDeleteModal}
			>
				Delete All Files
			</Button>
			{/* {props.files.map((file) => (
				<Item button>
					<ListItemText primary={file} />
				</ListItem>
			))} */}
		</>
	);
};
export default UpdateFiles;
