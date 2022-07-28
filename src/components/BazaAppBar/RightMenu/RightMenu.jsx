import React from 'react';
import style from "./RightMenu.module.css";
import RightBar from '../../RightBar/RightBar';


const RightMenu = () => {
	return (
		<div className={style.rightMenu}>
			<RightBar />
		</div>
	);
};

export default RightMenu;