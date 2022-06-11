import React from 'react';
import style from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';
import { Link } from "react-router-dom";



const SideBar = () => {




	return (
		<div className={style.sidebar}>

			<Link to="/tools"><SideBarItem title="Инструменты" /></Link>
			<Link to="/guides"><SideBarItem title="Инструкции" /></Link>
			<Link to="/workbook"><SideBarItem title="Конспект" /></Link>

		</div>
	);
};

export default SideBar;