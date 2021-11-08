import { Grid, Stack, Typography } from "@mui/material";
import ServiceCard from "../UI/ServiceCard";

const services = [
	{ title: "Get certified for your medical marijuana card", id: "0" },
	{ title: "Online telemedicine visits available", id: "1" },
	{ title: "In-person office visits", id: "2" },
	{ title: "Direct access to your doctor via phone, text, and email", id: "3" },
	{ title: "Assistance with card registration", id: "4" },
	{ title: "Ongoing dosing and regimen guidance", id: "5" },
	{ title: "Support of regards to employment and legal situation", id: "6" },
];
const servicesA = [
	{ title: "Get certified for your medical marijuana card", id: "0" },
	{ title: "Online telemedicine visits available", id: "1" },
];
const servicesB = [
	{ title: "In-person office visits", id: "2" },
	{ title: "Direct access to your doctor via phone, text, and email", id: "3" },
	{ title: "Assistance with card registration", id: "4" },
	{ title: "Ongoing dosing and regimen guidance", id: "5" },
	{ title: "Support of regards to employment and legal situation", id: "6" },
];

const Services = () => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={6}>
				<ServiceCard title="Service Provided by Us" highlight>
					<Stack spacing={2} justifyContent="center" alignItems="flex-start">
						{services.map((s) => (
							<div key={s.id}>
								<Typography
									variant="subtitle1"
									component="span"
									color="primary.main"
								>
									&#10004;{" "}
								</Typography>
								<Typography variant="subtitle1" component="span">
									{s.title}
								</Typography>
							</div>
						))}
					</Stack>
				</ServiceCard>
			</Grid>
			<Grid item xs={12} md={6}>
				<ServiceCard title="Other Telemed-Only Website">
					<Stack spacing={2} justifyContent="center" alignItems="flex-start">
						{servicesA.map((s) => (
							<div key={s.id}>
								<Typography
									variant="subtitle1"
									component="span"
									color="primary.main"
								>
									&#10004;{" "}
								</Typography>
								<Typography variant="subtitle1" component="span">
									{s.title}
								</Typography>
							</div>
						))}
						{servicesB.map((s) => (
							<div key={s.id}>
								<Typography
									variant="subtitle1"
									component="span"
									color="error.main"
								>
									&#10007;{" "}
								</Typography>
								<Typography
									variant="subtitle1"
									component="span"
									color="text.secondary"
									sx={{
										textDecoration: "line-through",
										// textDecorationColor: "#d32f2f",
									}}
								>
									{s.title}
								</Typography>
							</div>
						))}
					</Stack>
				</ServiceCard>
			</Grid>
		</Grid>
	);
};
export default Services;
