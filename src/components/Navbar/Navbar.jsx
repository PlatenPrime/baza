import React from 'react';
import style from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';
import { Link } from "react-router-dom";


const Navbar = ({ links }) => {

	let navbarLinks = links.map((item) =>
		<Link key={item.id} className={style.NavbarLink} to={item.route}><NavbarItem title={item.title} /></Link>

	)

	

	return (
		<div className={style.navbar}>

			{navbarLinks}


		</div>
	);
};

export default Navbar;