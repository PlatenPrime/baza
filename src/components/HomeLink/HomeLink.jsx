import React from 'react';
import style from './HomeLink.module.css';
import { Link } from "react-router-dom";

const HomeLink = () => {
	return (
		<div className={style.homeLink}>
			<Link to="/" className={style.homeLinkLink} >
				<h1>BAZA</h1>
			</Link>
			<hr />
		</div>
	);
};

export default HomeLink;