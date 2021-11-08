import { NavLink as RouterLink } from "react-router-dom";
import { Stack, Link } from "@mui/material";

const NavLinks = (props) => {
	return (
		<Stack
			direction="row"
			justifyContent="flex-end"
			alignItems="center"
			spacing={3}
		>
			{props.links.map((link) => (
				<Link
					component={RouterLink}
					underline="hover"
					to={link.url}
					variant="body1"
					color="primary.light"
					key={link.title}
					activeStyle={{
						textDecoration: "underline",
						textDecorationColor: "rgba(45, 81, 163,0.5)",
					}}
					exact
				>
					{link.title}
				</Link>
			))}
		</Stack>
	);
};

export default NavLinks;
