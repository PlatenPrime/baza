import React from 'react';
import style from './NavbarItem.module.css';

const NavbarItem = ({ title, icon }) => {
	return (
		<div className={style.NavbarItem}>
			{icon}	{title}

		</div>
	);
};

export default NavbarItem;