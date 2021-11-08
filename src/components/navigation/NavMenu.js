import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";

import { Button, Drawer, SvgIcon, Stack, Link } from "@mui/material";

const NavMenu = (props) => {
	const [showDrawer, setShowDrawer] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setShowDrawer(open);
	};

	return (
		<>
			<Button onClick={toggleDrawer(true)}>
				<SvgIcon>
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
				</SvgIcon>
			</Button>
			<Drawer open={showDrawer} onClose={toggleDrawer(false)} anchor="right">
				<Stack justifyContent="flex-start" alignItems="left" spacing={2} p={3}>
					{props.links.map((link) => (
						<Link
							component={RouterLink}
							underline="hover"
							to={link.url}
							variant="body1"
							color="primary.light"
							key={link.title}
						>
							{link.title}
						</Link>
					))}
				</Stack>
			</Drawer>
		</>
	);
};

export default NavMenu;
