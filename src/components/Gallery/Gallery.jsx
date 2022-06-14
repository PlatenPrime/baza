import React from 'react';
import style from './Gallery.module.css';
import GalleryCard from './GalleryCard/GalleryCard';

const Gallery = () => {
	return (
		<div className={style.gallery}>
			<GalleryCard index="0" />
			<GalleryCard index="1" />

		</div>
	);
};

export default Gallery;