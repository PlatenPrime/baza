import React from 'react';
import style from './GalleryCard.module.css';
import { toolsLinks } from '../../../data/Links/toolsLinks';

const GalleryCard = (props) => {

	//Хардкод подвязки под массив данных, обязательно потом замапь это все через получения параметра useParams

	const category = toolsLinks.resourses;

	return (


		<div className={style.card}>
			<div className={style.cardImg}>
				<a href={category[props.index].link} target="_blank">
					<img src={category[props.index].img} alt="" />
				</a>
			</div>
			<div className={style.cardP}>
				<a href={category[props.index].link} target="_blank">
					<p>{category[props.index].title}</p>
				</a>
			</div>
		</div>








	);
};

export default GalleryCard;