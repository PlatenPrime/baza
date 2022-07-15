import React, { useState } from 'react';
import style from './GalleryCard.module.css';
import cx from 'classnames';







const GalleryCard = (props) => {


	//управляем отображением описания при наведении

	const [cardImgDescription, setCardImgDescription] = useState(false);

	const handleDescriptionEnter = () => {
		setCardImgDescription(true);
	};

	const handleDescriptionLeave = () => {
		setCardImgDescription(false);
	};



	// делаем заглушку на время загрузки картинок

	const [blockImg, setBlockImg] = useState(true);

	setTimeout(() => {
		setBlockImg(false)
	}, 500);














	return (


		<div className={style.card}

			onMouseEnter={handleDescriptionEnter}
			onMouseLeave={handleDescriptionLeave}    >

			<a className={style.cardLink} href={props.link} target="_blank">



				{blockImg ? <div className={style.cardBlockOn} ></div> : <div className={style.cardBlockOff} ></div>}


				<section>
					{
						cardImgDescription ?
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
				</section>


				<div className={style.cardP}>

					<p>{props.title}</p>

				</div>



			</a>

		</div >


	);
};

export default GalleryCard;