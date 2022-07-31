import React from 'react';
import style from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';
import { Link } from "react-router-dom";
import { Box, Divider, Stack } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';




const SideBar = () => {




	return (
		<Stack direction="column"
			spacing={1}
			className={style.sidebar} sx={{}}  >


			<Link to="/tools" className={style.sidebarLink} ><SideBarItem title="Инструменты" /></Link>


			<a href="https://platentutorials.vercel.app/" target="_blanked" className={style.sidebarLink}><SideBarItem title="Туториалы" iconR={<OpenInNewIcon />} ></SideBarItem></a>



		</Stack>
	);
};

export default SideBar;