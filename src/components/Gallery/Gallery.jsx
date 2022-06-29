import React from 'react';
import style from './Gallery.module.css';
import GalleryCard from './GalleryCard/GalleryCard';
import { toolsLinks } from "./../../data/Links/toolsLinks";

const Gallery = ({ category }) => {


	const listLinks = toolsLinks[category];

	const listGallery = listLinks.map((item) =>

		<GalleryCard key={item.id} link={item.link} title={item.title} img={item.img} />
	);


	return (
		<div className={style.gallery}>

			{listGallery}

		</div>
	);
};

export default Gallery;