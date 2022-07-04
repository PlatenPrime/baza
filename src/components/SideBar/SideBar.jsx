import React from 'react';
import style from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';
import { Link } from "react-router-dom";
import HomeLink from '../HomeLink/HomeLink';




const SideBar = () => {




	return (
		<div className={style.sidebar}>
			<HomeLink />
			<Link to="/tools" className={style.sidebarLink} ><SideBarItem title="Инструменты" /></Link>
			<Link to="/guides" className={style.sidebarLink}><SideBarItem title="Инструкции" /></Link>
			<Link to="/workbook" className={style.sidebarLink}><SideBarItem title="Конспект" /></Link>



		</div>
	);
};

export default SideBar;