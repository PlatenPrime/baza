import React from 'react';
import style from './Main.module.css';
import Guides from '../Guides/Guides';
import Workbook from '../Workbook/Workbook';
import Tools from '../Tools/Tools';

const Main = () => {
	return (
		<div className={style.faska}>
			<Guides />
			<Tools />
			<Workbook />

		</div>
	);
};

export default Main;