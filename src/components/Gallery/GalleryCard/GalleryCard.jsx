import React from 'react';
import style from './GalleryCard.module.css';


const GalleryCard = (props) => {


	return (


		<div className={style.card}>
			<div className={style.cardImg}>
				
					<img src={props.img} alt="" />
			
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