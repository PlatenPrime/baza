import React from 'react';
import style from './HomeLink.module.css';
import { Link } from "react-router-dom";

const HomeLink = () => {
	return (
		<div className={style.homeLink}>
			<Link to="/" className={style.homeLinkLink} >
				BAZA
			</Link>

		</div>
	);
};

export default HomeLink;