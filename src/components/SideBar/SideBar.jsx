import React from 'react';
import style from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';
import { Link } from "react-router-dom";
import HomeLink from '../HomeLink/HomeLink';
import { Box } from '@mui/material';
import BazaAppBar from '../BazaAppBar/BazaAppBar';




const SideBar = () => {




	return (
		<Box  className={style.sidebar} sx={{

		}}  >
			
			<Link to="/tools" className={style.sidebarLink} ><SideBarItem title="Инструменты" /></Link>
			{/* <Link to="/guides" className={style.sidebarLink}><SideBarItem title="Инструкции" /></Link>
			<Link to="/workbook" className={style.sidebarLink}><SideBarItem title="Конспект" /></Link> */}
			<a href="https://platentutorials.vercel.app/" target="_blanked" className={style.sidebarLink}><SideBarItem title="Туториалы" /></a>



		</Box>
	);
};

export default SideBar;