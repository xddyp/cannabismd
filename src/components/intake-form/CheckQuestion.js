import { ErrorMessage, FastField } from "formik";

import {
	FormControl,
	FormLabel,
	FormGroup,
	Box,
	Typography,
} from "@mui/material";

import { CheckboxFormik } from "../UI/TextFieldFormik";

const conditions = [
	{
		title: "Chronic pain",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "CP",
	},
	{
		title: "Opioid replacement",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "OP",
	},
	{
		title: "Cancer",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "CC",
	},
	{
		title: "Neuropathy",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "NRP",
	},
	{
		title: "Epilepsy",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "EPL",
	},
	{
		title: "HIV/AIDS",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "HIV",
	},
	{
		title: "Spinal cord injury",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "SP",
	},
	{
		title: "Parkinson’s disease",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "PKS",
	},
	{
		title: "Multiple sclerosis",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "MS",
	},
	{
		title: "Huntington’s disease",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "HD",
	},
	{
		title: "Inflammatory bowel disease",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "IBD",
	},
	{
		title: "Post-traumatic stress disorder",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "PTSD",
	},
	{
		title: "Amyotrophic lateral sclerosis",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "ALS",
	},
	{
		title: "Other",
		detail:
			"uptas nihil minus, magni mollitia maiores, beatae quisquam aut doloremque obcaecati molestias. Iste, consequatur.",
		id: "OTHER",
	},
];

const CheckQuestion = (props) => {
	return (
		<FormControl>
			<FormLabel>
				<Typography variant="subtitle1" color="textPrimary" paragraph>
					Chronic pain Do you suffer from any of the following? Please check the
					conditions for which you seek for medical marijuana. If your condition
					is not listed, please select "Other".
				</Typography>
			</FormLabel>
			<Typography color="error">
				<ErrorMessage name="conditions" />
			</Typography>
			<FormGroup row>
				{conditions.map((c) => (
					<Box minWidth="30ch" width="50%" key={c.id}>
						<FastField
							type="checkbox"
							name="conditions"
							value={c.title}
							component={CheckboxFormik}
							Label={{ label: c.title }}
						/>
					</Box>
				))}
			</FormGroup>
		</FormControl>
	);
};
export default CheckQuestion;
