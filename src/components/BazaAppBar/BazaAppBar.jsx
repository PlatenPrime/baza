import { Box } from '@mui/material';
import React from 'react';
import HomeLink from "../../components/HomeLink/HomeLink";
import style from "./BazaAppBar.module.css";


const BazaAppBar = () => {
	return (

		<Box className={style.BazaAppBar}  >

			<HomeLink/>

		</Box>

	);
};

export default BazaAppBar;