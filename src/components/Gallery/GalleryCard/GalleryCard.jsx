import React from 'react';
import style from './GalleryCard.module.css';

const GalleryCard = () => {
	return (


		<div className={style.card}>
			<div className={style.cardImg}>
				<a href="https://www.bootstrapcdn.com/" target="_blank">
					<img src="https://pbs.twimg.com/profile_images/1426025801078558720/oetIUXi7_400x400.jpg" alt="" />
				</a>
			</div>
			<div className={style.cardP}>
				<a href="https://www.bootstrapcdn.com/" target="_blank">
					<p>bootstrap cdn</p>
				</a>
			</div>
		</div>








	);
};

export default GalleryCard;