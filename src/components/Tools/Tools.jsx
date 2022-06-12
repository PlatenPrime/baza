import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import style from './Tools.module.css';
import { toolsNavbar } from '../../data/Navbars/toolsNavbar';
import { useParams } from "react-router-dom";
import { toolsLinks } from '../../data/Links/toolsLinks';


const Tools = () => {

	let params = useParams();


	return (
		<div className={style.greenback}>


			<Navbar links={toolsNavbar} />

			<h1>Это страница инструментов</h1>

			<h2> Категория: {toolsLinks[params.toolscategory].id} </h2>




			<Outlet />


		</div>
	);
};

export default Tools;