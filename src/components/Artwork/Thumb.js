import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/art.module.css';

const Thumb = ({art}) => {

	let {collection, images} = art
	let mainImage = images[0].fluid;

	// const thumbTitle = collection ? `${collection + ' collection'}` : `${medium + 's'}`
	// const redirectLink = collection ? `${collection}` : `${medium + 's'}`


	return (
		<article className={styles.art}>
			<div className={styles.imgContainer}>
				<Image fluid={mainImage} className={styles.img} alt='single Thumb' />
				<AniLink fade className={styles.link} to={`/${collection}`}><span className={styles.thumbTitle}>{collection + 's'}</span></AniLink>
			</div>
			<div className={styles.footer}>
				<h2>{collection}</h2>
			</div>
		</article>
	)
}

export default Thumb
