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

			<a className={style.cardLink} href={props.link} target="_blank">




				{cardImgDescription ?


					<section className={cx(style.cardImgDescription, style.animationOfCardDescription)}>
						<div className={cx(style.cardDescription)} >
							<p >   {props.description}  </p>
						</div>
						<section className={cx(style.cardImg)} >
							<img src={props.img} alt="" />
						</section>

					</section>

					:


					<div className={cx(style.cardImgDescription, style.animationOfCardImg)}>

						<section className={cx(style.cardImg)} >
							<img src={props.img} alt="" />
						</section>

					</div>


				}



				<div className={style.cardP}>

					<p>{props.title}</p>

				</div>



			</a>

		</div>


	);
};

export default GalleryCard;