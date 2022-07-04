import React from 'react';
import style from "./TestHover.module.css";
import cx from 'classnames';
import { selectUnstyledClasses } from '@mui/base';

const TestHover = () => {
	return (
		<div className={style.container}>
			<button className={style.top} >hover me</button>
			<div className={style.middle}></div>
			<div className={style.bottom}></div>
		</div>
	);
};

export default TestHover;