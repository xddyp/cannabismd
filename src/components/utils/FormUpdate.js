import { doc, getFirestore, updateDoc, Timestamp } from 'firebase/firestore';

const db = getFirestore();

export const updateForm = (id, values) => {
	const docRef = doc(db, 'patients', id);
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
		mrn: values.mrn
			? values.mrn.charAt(0).toLowerCase() + values.mrn.slice(1)
			: '',
		notes: values.notes,
		code: values.code ? values.code.toUpperCase() : '',
	};
	return updateDoc(docRef, content);
};

export const handleMRN = async (id, mrn) => {
	const docRef = doc(db, 'patients', id);
	await updateDoc(docRef, {
		mrn: mrn.charAt(0).toLowerCase() + mrn.slice(1),
	});
};
export const handleNotes = async (id, notes) => {
	const docRef = doc(db, 'patients', id);
	await updateDoc(docRef, {
		notes: notes,
	});
};
export const handleNewCert = async (id, date, history) => {
	date.setHours(0, 0, 0, 0);
	const newDate = Timestamp.fromDate(date);
	history.push(newDate);
	history.sort();
	const docRef = doc(db, 'patients', id);
	await updateDoc(docRef, {
		history: history,
	});
	await updateDoc(docRef, { latest: history.at(-1) });
};
export const handleDeleteCert = async (id, date, history) => {
	const docRef = doc(db, 'patients', id);
	if (history.length === 1) {
		await updateDoc(docRef, {
			history: [],
			latest: null,
		});
	} else {
		history = history.filter((d) => !d.isEqual(date));
		history.sort();
		console.log(history);
		await updateDoc(docRef, {
			history: history,
		});
		if (history.length !== 0) {
			await updateDoc(docRef, { latest: history.at(-1) });
		} else {
			await updateDoc(docRef, { latest: null });
		}
	}
};
