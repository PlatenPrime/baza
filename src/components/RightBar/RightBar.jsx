import { Box } from '@mui/material';
import React from 'react';
import { toolsNavbar } from '../../data/Navbars/toolsNavbar';
import Navbar from '../Navbar/Navbar';
import style from "./RightBar.module.css";




const RightBar = ({ }) => {



	return (
		<Box className={style.rightBar}  >




			 <Navbar links={toolsNavbar} />


		</Box>
	);
};

export default RightBar;