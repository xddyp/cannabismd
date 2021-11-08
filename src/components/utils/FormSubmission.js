import { doc, setDoc, getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
const db = getFirestore();
const storage = getStorage();

export const uploadForm = async (values) => {
	const docRef = doc(collection(db, 'patients'));
	let files = [];
	if (values.filesMed) {
		let i = 0;
		for (let file of values.filesMed) {
			const fileRef = ref(
				storage,
				`patients/${docRef.id}/${values.first}-med${i}-${file.name}`
				// `patients/${docRef.id}/${values.first}-med${i}`
			);
			uploadBytes(fileRef, file);
			files.push(fileRef.fullPath);
		}
	}
	if (values.fileID) {
		for (let file of values.fileID) {
			const fileRef = ref(storage, `patients/${docRef.id}/${values.first}-id`);
			uploadBytes(fileRef, file);
			files.push(fileRef.fullPath);
		}
	}
	if (values.first) {
		values.first = values.first.trim();
	}
	if (values.last) {
		values.last = values.last.trim();
	}
	const content = {
		first: values.first
			? values.first.charAt(0).toUpperCase() +
			  values.first.slice(1).toLowerCase()
			: '',
		last: values.last
			? values.last.charAt(0).toUpperCase() + values.last.slice(1).toLowerCase()
			: '',
		dob: values.dob,
		gender: values.gender,
		phone: values.phone ? values.phone.replace(/\D/g, '') : '',
		email: values.email,
		street: values.street,
		city: values.city,
		state: values.state,
		zip: values.zip,
		conditions: values.conditions,
		questions: values.questions,
		comments: values.comments,
		appt: values.appt,
		communication: values.communication,
		files: files,
		history: values.history,
		latest: values.latest,
		inquiry: new Date(),
		mrn: values.mrn,
		notes: values.notes,
		code: values.code ? values.code.toUpperCase() : '',
	};
	return setDoc(docRef, content);
};
