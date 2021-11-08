import {
	getDoc,
	getFirestore,
	doc,
	query,
	collection,
	where,
} from "firebase/firestore";
const db = getFirestore();
export const fetchById = (id) => {
	const docRef = doc(db, "patients", id);
	return getDoc(docRef);
};
export const fetchByNameOrMrn = (values) => {
	let q;
	if (values.code) {
		q = query(
			collection(db, "patients"),
			where("code", "==", values.code.toUpperCase())
		);
	} else if (values.mrn) {
		q = query(
			collection(db, "patients"),
			where(
				"mrn",
				"==",
				values.mrn.charAt(0).toLowerCase() + values.mrn.slice(1)
			)
		);
	} else if (values.first && values.last) {
		q = query(
			collection(db, "patients"),
			where(
				"first",
				"==",
				values.first.charAt(0).toUpperCase() +
					values.first.slice(1).toLowerCase()
			),
			where(
				"last",
				"==",
				values.last.charAt(0).toUpperCase() + values.last.slice(1).toLowerCase()
			)
		);
	} else if (values.first) {
		q = query(
			collection(db, "patients"),
			where(
				"first",
				"==",
				values.first.charAt(0).toUpperCase() +
					values.first.slice(1).toLowerCase()
			)
		);
	} else if (values.last) {
		q = query(
			collection(db, "patients"),
			where(
				"last",
				"==",
				values.last.charAt(0).toUpperCase() + values.last.slice(1).toLowerCase()
			)
		);
	} else {
		return;
	}
	return q;
};
