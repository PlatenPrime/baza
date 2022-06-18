import React from 'react';
import style from './GalleryCard.module.css';


const GalleryCard = (props) => {


	return (


		<div className={style.card}>
			<div className={style.cardImg}>
				<a href={props.link} target="_blank">
					<img src={props.img} alt="" />
				</a>
			</div>
			<div className={style.cardP}>
				<a href={props.link} target="_blank">
					<p>{props.title}</p>
				</a>
			</div>
		</div>


	);
};

export default GalleryCard;