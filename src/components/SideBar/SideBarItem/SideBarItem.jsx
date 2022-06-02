import React from 'react';
import style from './SideBarItem.module.css';


const SideBarItem = ({ title, icon }) => {

	return (
		<div className={style.SideBarItem}>
		{icon}	{title}

		</div>
	);
};

export default SideBarItem;