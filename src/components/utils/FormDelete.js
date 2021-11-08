import { deleteDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
const storage = getStorage();
const db = getFirestore();
export const deleteForm = async (docRef, files) => {
	if (files.length !== 0) {
		for (let path of files) {
			const desertRef = ref(storage, path);
			deleteObject(desertRef)
				.then(() => {
					// File deleted successfully
				})
				.catch((error) => {
					console.log(error.message);
					// Uh-oh, an error occurred!
				});
		}
	}
	return deleteDoc(docRef);
};
export const deleteFiles = async (id, files) => {
	for (let path of files) {
		const desertRef = ref(storage, path);
		deleteObject(desertRef)
			.then(() => {
				// File deleted successfully
			})
			.catch((error) => {
				console.log(error.message);
				// Uh-oh, an error occurred!
			});
	}
	const docRef = doc(db, "patients", id);
	return updateDoc(docRef, { files: [] });
};
