import React from 'react';
import style from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';
import { Link } from "react-router-dom";
import HomeLink from '../HomeLink/HomeLink';
import { Box } from '@mui/material';




const SideBar = () => {




	return (
		<Box flex={1} p={1} className={style.sidebar}>
			<Link to="/tools" className={style.sidebarLink} ><SideBarItem title="Инструменты" /></Link>
			<Link to="/guides" className={style.sidebarLink}><SideBarItem title="Инструкции" /></Link>
			<Link to="/workbook" className={style.sidebarLink}><SideBarItem title="Конспект" /></Link>



		</Box>
	);
};

export default SideBar;