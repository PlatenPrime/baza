import { Box } from '@mui/material';
import React from 'react';
import style from "./RightBar.module.css";

const RightBar = () => {
	return (
		<Box flex={2} m={0} p={0} className={style.rightBar} sx={{
			display: {
				xs: "none",
				sm: "none",
				md: "block"
			}
		}} >
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>
			<h3>RightBar here!</h3>


		</Box>
	);
};

export default RightBar;