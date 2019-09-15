import Image from 'gatsby-image';
// import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/tour.module.css';
// import {FaPalette, FaPenFancy, FaApple} from 'react-icons/fa'
const Thumb = ({art}) => {

	let {name, slug, description, createdAt, featured, medium, images, price} = art
	let mainImage = images[0].fluid;

	return (
		<article className={styles.tour}>
			<div className={styles.imgContainer}>
				<Image fluid={mainImage} className={styles.img} alt='single Thumb' />
				<AniLink fade className={styles.link} to={`/${medium + 's'}`}>{medium + 's'}</AniLink>
			</div>
			<div className={styles.footer}>

				<h2>{medium + 's'}</h2>



			</div>
		</article>
	)
}

export default Thumb
