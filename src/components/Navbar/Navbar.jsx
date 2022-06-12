import React from 'react';
import style from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';
import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<div>

			<Link to="/github"><NavbarItem title="GitHub" /></Link>

		</div>
	);
};

export default Navbar;