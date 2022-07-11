import React, { useState } from 'react';
import style from './GalleryCard.module.css';
import cx from 'classnames';


const GalleryCard = (props) => {

	const [cardImgDescription, setCardImgDescription] = useState(false);

	/* const handleDescription = () => {
		setCardImgDescription(!cardImgDescription);
	}; */

	const handleDescriptionEnter = () => {
		setCardImgDescription(true);
	};

	const handleDescriptionLeave = () => {
		setCardImgDescription(false);
	};

	return (


		<div className={style.card}



			onMouseEnter={handleDescriptionEnter}
			onMouseLeave={handleDescriptionLeave}    >


			<div className={cx(style.cardImg)}
			/* onClick={handleDescription} */
			>

				{cardImgDescription ?
					<div className={cx(style.animationOfCardImgP, style.cardImgP)}>
						<p >   {props.description}  </p>
					</div>
					:
					<section className={cx(style.animationOfCardImgImg)}>
						<img src={props.img} alt="" />
					</section>
				}

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