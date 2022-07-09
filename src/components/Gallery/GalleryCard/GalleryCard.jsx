import React, { useState } from 'react';
import style from './GalleryCard.module.css';


const GalleryCard = (props) => {

	const [cardImgDescription, setCardImgDescription] = useState(false);

	const handleDescription = () => {
		setCardImgDescription(!cardImgDescription);
	}


	return (


		<div className={style.card}>
			<div className={style.cardImg} onClick={handleDescription} >

				{cardImgDescription ? <h1>Description {props.title}</h1> : <img src={props.img} alt="" />}



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