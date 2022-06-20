import React from 'react';
import style from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';
import { NavLink } from "react-router-dom";


const Navbar = ({ links }) => {

	const setActive = ({ isActive }) => isActive ? style.NavbarLink_active : style.NavbarLink;




	let navbarLinks = links.map((item) =>
		<NavLink key={item.id} className={setActive} to={item.route}><NavbarItem title={item.title} /></NavLink>

	)



	return (
		<div className={style.navbar}>

			{navbarLinks}


		</div>
	);
};

export default Navbar;