import Section from "../components/UI/Section";
import SectionTitle from "../components/UI/SectionTitle";
const ErrorPage = (props) => {
	return (
		<Section>
			<SectionTitle
				title={{
					text2: "Error",
					subtext: props.message,
				}}
			/>
		</Section>
	);
};

export default ErrorPage;
