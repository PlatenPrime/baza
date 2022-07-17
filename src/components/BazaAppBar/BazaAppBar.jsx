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

const BazaAppBar = () => {
	return (

		<AppBar  sx={{ bgcolor: "rgb(5, 200, 142, 0.5)", color: "#000", }}>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{
						display: {
							xs: "block",
							sm: "none"
						}
					}}
				>
					<MenuIcon />
				</IconButton>

				<HomeLink />


			</Toolbar>
		</AppBar>
	);
};

export default BazaAppBar;