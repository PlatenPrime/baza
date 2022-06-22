import React from 'react';
import style from './SideBarItem.module.css';


const SideBarItem = ({ title, icon }) => {

	return (
		<>
			<div className={style.sideBarItem}>
				{icon}	{title}


			</div>

		</>
	);

};

export default SideBarItem;