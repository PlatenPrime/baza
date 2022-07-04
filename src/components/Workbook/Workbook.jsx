import React from 'react';
import style from './Workbook.module.css';
import Navbar from '../Navbar/Navbar';
import TestHover from '../TestHover/TestHover';

const Workbook = () => {
	return (
		<div className={style.blueback}>
			<TestHover />

		</div>
	);
};

export default Workbook;