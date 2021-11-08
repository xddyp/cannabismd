import { TextField, Checkbox, FormControlLabel, Switch } from "@mui/material";
import { getIn } from "formik";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
const createErrorHandler = (fieldError, fieldName, setFieldError) => {
	return (error) => {
		if (error !== fieldError && error !== "") {
			setFieldError(fieldName, error ? error.message : undefined);
		}
	};
};
export const TextFieldFormik = ({
	children,
	disabled,
	field: { onBlur: fieldOnBlur, ...field },
	form: { isSubmitting, touched, errors },
	onBlur,
	helperText,
	...props
}) => {
	const fieldError = getIn(errors, field.name);
	const showError = getIn(touched, field.name) && !!fieldError;

	return (
		<TextField
			variant="standard"
			error={showError}
			helperText={showError ? fieldError : helperText}
			disabled={disabled ?? isSubmitting}
			onBlur={
				onBlur ??
				function (e) {
					fieldOnBlur(e ?? field.name);
				}
			}
			{...field}
			{...props}
		>
			{children}
		</TextField>
	);
};

export const DatePickerFormik = ({
	children,
	disabled,
	field: { onChange: _onChange, onBlur: fieldOnBlur, ...field },
	form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
	onChange,
	onBlur,
	onError,
	// helperText,
	...props
}) => {
	const fieldError = getIn(errors, field.name);
	const showError = getIn(touched, field.name) && !!fieldError;
	return (
		<DesktopDatePicker
			error={showError}
			renderInput={(params) => (
				<TextField {...params} variant="standard" required={props.required} />
			)}
			disabled={disabled ?? isSubmitting}
			onChange={
				onChange ??
				function (date) {
					setFieldValue(field.name, date);
				}
			}
			onBlur={
				onBlur ??
				function (e) {
					fieldOnBlur(e ?? field.name);
				}
			}
			onError={
				onError ?? createErrorHandler(fieldError, field.name, setFieldError)
			}
			{...field}
			{...props}
		>
			{children}
		</DesktopDatePicker>
	);
};
export const CheckboxFormik = ({
	disabled,
	field: { onBlur: fieldOnBlur, ...field },
	form: { isSubmitting },
	onBlur,
	Label,
	...props
}) => {
	// type = "checkbox";
	// if (process.env.NODE_ENV !== "production") {
	// 		type === "checkbox",
	// 		// `property type=checkbox is missing from field ${field.name}, this can caused unexpected behaviour`
	// }

	return (
		<FormControlLabel
			control={
				<Checkbox
					disabled={disabled ?? isSubmitting}
					onBlur={
						onBlur ??
						function (e) {
							fieldOnBlur(e ?? field.name);
						}
					}
					{...field}
					{...props}
				/>
			}
			{...Label}
		/>
	);
};

export const SwitchFormik = ({
	disabled,
	field: { onBlur: fieldOnBlur, ...field },
	form: { isSubmitting },
	type,
	onBlur,
	...props
}) => {
	return (
		<Switch
			disabled={disabled ?? isSubmitting}
			onBlur={
				onBlur ??
				function (e) {
					fieldOnBlur(e ?? field.name);
				}
			}
			{...field}
			{...props}
		/>
	);
};
