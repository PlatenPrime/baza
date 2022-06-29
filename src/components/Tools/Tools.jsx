import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import style from './Tools.module.css';
import { toolsNavbar } from '../../data/Navbars/toolsNavbar';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { ToolsCategoryContext } from './ToolsCategoryContext.js';

const Tools = () => {

	let params = useParams();


	// Мы достаем контекст из файла, но меняем его на свое нужное динамическое значение
	// и в самом провайдере передаем уже его 

	let category = useContext(ToolsCategoryContext);

	category = params.category;







	return (
		<div className={style.tools}>


			<Navbar links={toolsNavbar} />


			<ToolsCategoryContext.Provider value={category}>

				{params.category ? <Outlet /> : <h3>Клацни по какой-то кнопке, чтобы увидеть красоту!</h3>}

			</ToolsCategoryContext.Provider>














		</div>
	);
};

export default Tools;