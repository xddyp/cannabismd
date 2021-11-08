export const CSVConvert = (p) => {
	return {
		"Given Name": p.first || "",
		"Family Name": p.last || "",
		Birthday: p.dob
			? `${p.dob.getMonth() + 1}/${p.dob.getDate()}/${p.dob.getFullYear()}`
			: null,
		"E-mail 1-Value": p.email || "",
		"Phone 1-Value": p.phone
			? "(" +
			  p.phone.slice(0, 3) +
			  ") " +
			  p.phone.slice(3, 6) +
			  "-" +
			  p.phone.slice(-4)
			: "",
		"Address 1-Street": p.street || "",
		"Address 1-City": p.city || "",
		"Address 1-Region": p.state || "",
		"Address 1-Postal Code": p.zip || "",
		Notes:
			(p.mrn ? p.mrn + ". " : "") +
			(p.code ? p.code + ". " : "") +
			(p.notes || ""),
	};
};
export const CSVCovertForDownload = (patients) => {
	const data = patients.map((p) => p.data());
	const formatData = data.map((p) => ({
		code: p.code,
		notes: p.notes,
		mrn: p.mrn,
		first: p.first,
		last: p.last,
		dob: p.dob
			? `${p.dob.toDate().getMonth() + 1}/${p.dob.toDate().getDate()}/${p.dob
					.toDate()
					.getFullYear()}`
			: "",
		gender: p.gender,
		phone: p.phone
			? "(" +
			  p.phone.slice(0, 3) +
			  ") " +
			  p.phone.slice(3, 6) +
			  "-" +
			  p.phone.slice(-4)
			: "",
		email: p.email,
		communication: p.communication,
		history: p.history
			? p.history.map(
					(date) =>
						`${date.toDate().getMonth() + 1}/${date.toDate().getDate()}/${date
							.toDate()
							.getFullYear()}`
			  )
			: "",
		latest: p.latest
			? `${p.latest.toDate().getMonth() + 1}/${p.latest
					.toDate()
					.getDate()}/${p.latest.toDate().getFullYear()}`
			: "",
		inquiry: p.inquiry
			? `${p.inquiry.toDate().getMonth() + 1}/${p.inquiry
					.toDate()
					.getDate()}/${p.inquiry.toDate().getFullYear()}`
			: "",
		street: p.street,
		city: p.city,
		state: p.state,
		zip: p.zip,
		conditions: p.conditions,
		questions: p.questions,
	}));

	return formatData;
};
