import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import style from './Tools.module.css';


const Tools = () => {
	return (
		<div className={style.greenback}>
			<Navbar />
			<Outlet/>


		</div>
	);
};

export default Tools;