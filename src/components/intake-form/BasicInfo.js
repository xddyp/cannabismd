import { FastField } from "formik";
import { MenuItem, Box } from "@mui/material";

import { DatePickerFormik, TextFieldFormik } from "../UI/TextFieldFormik";
const ways = ["Call", "Text", "Email"];
const genders = ["Female", "Male", "Intersex", "Other"];

const BasicInfo = () => {
	return (
		<>
			<Box
				sx={{
					"& .MuiTextField-root, .MuiFormControl-root": {
						m: 1,
						width: { xs: "100%", sm: "46%" },
					},
				}}
			>
				<FastField
					component={TextFieldFormik}
					name="first"
					type="text"
					label="First Name"
					required
				/>
				<FastField
					component={TextFieldFormik}
					name="last"
					type="text"
					label="Last Name"
					required
				/>
				<FastField
					component={DatePickerFormik}
					openTo="year"
					views={["year", "month", "day"]}
					name="dob"
					label="Date of Birth"
					required
				/>
				<FastField
					component={TextFieldFormik}
					label="Sex Assigned at Birth"
					type="text"
					name="gender"
					select
					required
				>
					{genders.map((c) => (
						<MenuItem value={c} key={c}>
							{c}
						</MenuItem>
					))}
				</FastField>
				<FastField
					component={TextFieldFormik}
					name="phone"
					type="tel"
					label="Phone"
					required
				/>
				<FastField
					component={TextFieldFormik}
					name="email"
					type="email"
					label="Email"
					required
				/>
			</Box>
			<Box
				sx={{
					"& .MuiTextField-root, .MuiFormControl-root": {
						m: 1,
						width: "100%",
					},
				}}
			>
				<FastField
					component={TextFieldFormik}
					multiline
					name="street"
					type="text"
					label="Address"
					required
				/>
			</Box>
			<Box
				sx={{
					"& .MuiTextField-root, .MuiFormControl-root": {
						m: 1,
						width: { xs: "30%", sm: "13%" },
					},
					display: "inline",
				}}
			>
				<FastField
					component={TextFieldFormik}
					name="city"
					type="text"
					label="City"
					required
				/>
				<FastField
					component={TextFieldFormik}
					name="state"
					type="text"
					label="State"
					required
				/>
				<FastField
					component={TextFieldFormik}
					name="zip"
					type="text"
					label="Zip"
					required
				/>
			</Box>
			<Box
				sx={{
					"& .MuiTextField-root, .MuiFormControl-root": {
						m: 1,
						width: { xs: "100%", sm: "46%" },
					},
				}}
			>
				<FastField
					component={DatePickerFormik}
					name="appt"
					label="Preferred Appointment Date"
				/>
				<FastField
					component={TextFieldFormik}
					label="Best Way to Reach You"
					type="text"
					name="communication"
					select
				>
					{ways.map((c) => (
						<MenuItem value={c} key={c}>
							{c}
						</MenuItem>
					))}
				</FastField>
			</Box>
		</>
	);
};
export default BasicInfo;
