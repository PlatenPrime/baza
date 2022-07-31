import React from 'react';
import Gallery from "./Gallery/Gallery"
import style from './Content.module.css';
import { useContext } from 'react';
import { ToolsCategoryContext } from '../ToolsCategoryContext';

const Content = (props) => {


	// в category здесь хранится тот адрес, что мы получаем с параметров роута

	const category = useContext(ToolsCategoryContext);

	return (
		<div className={style.content}>

			<Gallery category={category} />


		</div>
	);
};

export default Content;