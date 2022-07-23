import React from 'react';
import HomeLink from "../../components/HomeLink/HomeLink";
import style from "./BazaAppBar.module.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';

const BazaAppBar = () => {
	return (

		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky" sx={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.718)" }}>
				<Toolbar    >
					<Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }} >
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<HomeLink />
						<Button color="inherit">Login</Button>
					</Stack>

				</Toolbar>
			</AppBar>
		</Box>





	);
};

export default BazaAppBar;