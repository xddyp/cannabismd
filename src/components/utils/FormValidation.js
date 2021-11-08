import * as yup from 'yup';

export const YupInit = {
	first: '',
	last: '',
	dob: null,
	gender: '',
	phone: '',
	email: '',
	street: '',
	city: '',
	state: '',
	zip: '',
	conditions: [],
	questions: [],
	comments: '',
	appt: null,
	communication: '',
	filesMed: [],
	fileID: [],
	files: [],
	agreement: false,
	history: [],
	latest: null,
	mrn: 'c000000',
	notes: '',
	code: '',
};
const mrnRegExp = /^[aAbBcC]([0-9]{6})$/;
const phoneRegExp = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const checkIfFilesAreTooBig = (files) => {
	let valid = true;
	var size = 0;
	if (files.length !== 0) {
		for (let file of files) {
			size += file.size / 1024 / 1024;
			if (size > 25) {
				valid = false;
			}
		}
	}
	return valid;
};

const checkIfFilesAreCorrectType = (files) => {
	let valid = true;
	if (files) {
		for (let file of files) {
			if (
				!['application/pdf', 'image/jpg', 'image/jpeg', 'image/png'].includes(
					file.type
				)
			) {
				valid = false;
			}
		}
	}

	return valid;
};

export const YupSchema = yup.object().shape({
	first: yup.string().required('Required'),
	last: yup.string().required('Required'),
	dob: yup.date().nullable().required('Required'),
	gender: yup.string().required('Required'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Required'),
	email: yup.string().email('Invalid email address').required('Required'),
	street: yup.string().required('Required'),
	city: yup.string().required('Required'),
	state: yup.string().required('Required'),
	zip: yup.string().required('Required'),
	conditions: yup.array().of(yup.string()),
	questions: yup.array().of(yup.string()),
	comments: yup.string(),
	appt: yup.date().nullable(),
	communication: yup.string(),
	filesMed: yup
		.array()
		.nullable()
		.test('is-big-file', 'File size exceeds 25MB limit', checkIfFilesAreTooBig),
	// .test(
	// 	"is-correct-file",
	// 	"File formats allowed:pdf, jpg, jpeg, and png ",
	// 	checkIfFilesAreCorrectType
	// )
	fileID: yup
		.array()
		.nullable()
		.test('is-big-file', 'File size exceeds 25MB limit', checkIfFilesAreTooBig),
	// .test(
	// 	"is-correct-file",
	// 	"File formats allowed:pdf, jpg, jpeg, and png ",
	// 	checkIfFilesAreCorrectType
	// )
	agreement: yup.boolean('Please confirm terms and conditions.'),
});
export const YupSchemaContact = yup.object().shape({
	first: yup.string().required('Required'),
	last: yup.string().required('Required'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Required'),
	email: yup.string().email('Invalid email address').required('Required'),
	comments: yup.string(),
	appt: yup.date().nullable(),
	communication: yup.string(),
});
export const YupSchemaManulAdd = yup.object().shape({
	dob: yup.date().nullable(),
	first: yup.string(),
	last: yup.string(),
	phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
	email: yup.string(),
	notes: yup.string(),
	code: yup.string(),
	mrn: yup
		.string()
		.length(7, 'Must be one letter and 6 numbers')
		.matches(mrnRegExp, 'Must be one letter and 6 numbers'),
});
export const YupSchemaMrn = yup.object().shape({
	mrn: yup
		.string()
		.length(7, 'Must be one letter and 6 numbers')
		.matches(mrnRegExp, 'Must be one letter and 6 numbers'),
});

export const YupSchemaUpdate = yup.object().shape({
	first: yup.string(),
	last: yup.string(),
	dob: yup.date().nullable(),
	gender: yup.string(),
	phone: yup.string(),
	email: yup.string(),
	street: yup.string(),
	city: yup.string(),
	state: yup.string(),
	zip: yup.string(),
	conditions: yup.array().of(yup.string()),
	questions: yup.array().of(yup.string()),
	comments: yup.string(),
	communication: yup.string(),
	notes: yup.string(),
	code: yup.string(),
	mrn: yup
		.string()
		.length(7, 'Must be one letter and 6 numbers')
		.matches(mrnRegExp, 'Must be one letter and 6 numbers'),
});
export const YupSchemaSearch = yup.object().shape({
	first: yup.string(),
	last: yup.string(),
	mrn: yup
		.string()
		.length(7, 'Must be one letter and 6 numbers')
		.matches(mrnRegExp, 'Must be one letter and 6 numbers'),
});
