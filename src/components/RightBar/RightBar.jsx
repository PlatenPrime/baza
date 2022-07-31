import { Box } from '@mui/material';
import React from 'react';
import { toolsNavbar } from '../../data/Navbars/toolsNavbar';
import Navbar from '../Navbar/Navbar';
import style from "./RightBar.module.css";


import { useContext } from "react";
import { BazaContext } from './../../BazaContext';




const RightBar = ({ }) => {


	const state = useContext(BazaContext);

	console.log(state.displayRightBar);

	return (
		<Box className={style.rightBar}  >




			{state.displayRightBar ? <Navbar links={toolsNavbar} /> : ""}


		</Box>
	);
};

export default RightBar;