import React, { Children } from 'react';
import style from './SideBarItem.module.css';


const SideBarItem = ({ title, iconL, iconR }) => {

	return (
		<>
			<div className={style.sideBarItem}>
				{iconL}	{title} {iconR}
			
			</div>

		</>
	);

};

export default SideBarItem;