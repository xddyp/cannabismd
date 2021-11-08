import { Stack } from "@mui/material";
import Section from "../components/UI/Section";
import SectionTitle from "../components/UI/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/UI/Header";
import Services from "../components/home/Services";
import Conditions from "../components/home/Condtitions";
import Reviews from "../components/home/Reviews";
import Doctor from "../components/home/Doctor";
import Features from "../components/home/Features";

const HomePage = () => {
	return (
		<>
			<Header />
			<Section bgcolor="white">
				<SectionTitle
					title={{
						// text1: "New York State ",
						text2: "Our Services",
					}}
				/>
				<Features />
			</Section>
			<Section>
				<SectionTitle
					title={{
						text1: "New York State ",
						text2: "Medical Marijuana Program",
					}}
				/>
				<Conditions />
			</Section>
			<Section bgcolor="white">
				<SectionTitle
					title={{
						text1: "Never rushed ",
						text2: "Always available",
					}}
				/>
				<Doctor />
			</Section>
			<Section>
				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={1}
					sx={{
						color: "secondary.main",
						mb: 2,
					}}
				>
					<FontAwesomeIcon icon={faStar} size="2x" />
					<FontAwesomeIcon icon={faStar} size="2x" />
					<FontAwesomeIcon icon={faStar} size="2x" />
					<FontAwesomeIcon icon={faStar} size="2x" />
					<FontAwesomeIcon icon={faStar} size="2x" />
				</Stack>
				<SectionTitle
					title={{
						text1: " stars by our patients",
						text4: "Rated 5 out of 5",
					}}
				/>
				<Reviews />
			</Section>

			<Section bgcolor="white">
				<Services />
			</Section>
		</>
	);
};

export default HomePage;
