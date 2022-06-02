import React from 'react';
import style from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';
import { arrSideBarItems } from './../../data/SideBarData';


const SideBar = () => {
	

	const listSideBarItems = arrSideBarItems.map(item => {
		return <li key={item.id}> <SideBarItem title={item.title} icon={item.icon} /> </li>
	}
	);


	return (
		<div className={style.sidebar}>

			{listSideBarItems}

		</div>
	);
};

export default SideBar;