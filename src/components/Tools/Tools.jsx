import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Cheetsheets from './Cheetsheets/Cheetsheets';
import style from './Tools.module.css';
import { toolsNavbar } from '../../data/Navbars/toolsNavbar';


const Tools = () => {
	return (
		<div className={style.greenback}>


			<Navbar links={toolsNavbar} />

			<Outlet />


		</div>
	);
};

export default Tools;