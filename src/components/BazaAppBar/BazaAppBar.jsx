import { Box, Stack, Toolbar } from '@mui/material';
import React from 'react';
import HomeLink from "../../components/HomeLink/HomeLink";
import style from "./BazaAppBar.module.css";
import ListIcon from '@mui/icons-material/List';
import TocIcon from '@mui/icons-material/Toc';


const BazaAppBar = () => {
	return (

		<Box className={style.BazaAppBar}  >

			<Toolbar sx={{ width: "90%", display: "flex", flexDirection: "row", justifyContent: {
						xs: "space-between",
						sm: "space-between",
						md: "center"
					} }}>
				<ListIcon sx={{
					cursor: "pointer", display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
					fontSize: "2rem",
					display: {
						xs: "block",
						sm: "block",
						md: "none"
					},
				}} />
				<HomeLink />
				<TocIcon sx={{
					cursor: "pointer", display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
					fontSize: "2rem",
					display: {
						xs: "block",
						sm: "block",
						md: "none"
					},
				}} />
			</Toolbar>
		</Box>

	);
};

export default BazaAppBar;

