import React from 'react';
import style from './SideBarItem.module.css';


const SideBarItem = ({ title}) => {

	return (
		<div className={style.SideBarItem}>
			{title}

		</div>
	);
};

export default SideBarItem;