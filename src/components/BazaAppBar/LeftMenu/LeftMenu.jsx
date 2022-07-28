import React from 'react';
import SideBar from '../../SideBar/SideBar';
import style from "./LeftMenu.module.css";



const LeftMenu = () => {
	return (
		<div className={style.leftMenu}>
			<SideBar />
		</div>
	);
};

export default LeftMenu;