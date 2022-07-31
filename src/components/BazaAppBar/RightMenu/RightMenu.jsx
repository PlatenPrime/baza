import React from 'react';
import style from "./RightMenu.module.css";
import Navbar from '../../Navbar/Navbar';
import { toolsNavbar } from '../../../data/Navbars/toolsNavbar';


const RightMenu = () => {
	return (
		<div className={style.rightMenu}>
			<Navbar links={toolsNavbar} />
		</div>
	);
};

export default RightMenu;