import Section from "../components/UI/Section";
import SectionTitle from "../components/UI/SectionTitle";
const NotFound = () => {
	return (
		<Section>
			<SectionTitle
				title={{
					text2: "Not Found",
					subtext:
						"There's nothing here, but if you feel this is an error plaese let us know.",
				}}
			/>
		</Section>
	);
};

export default NotFound;
