import React from 'react';
import style from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';
import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<div className={style.navbar}>

			<Link className={style.NavbarLink} to="/resourses"><NavbarItem title="Ресурсы" /></Link>
			<Link className={style.NavbarLink} to="/cheetsheets"><NavbarItem title="Шпаргалки" /></Link>
			<Link className={style.NavbarLink} to="/libs"><NavbarItem title="Библиотеки" /></Link>
			<Link className={style.NavbarLink} to="/services"><NavbarItem title="Сервисы" /></Link>

		</div>
	);
};

export default Navbar;