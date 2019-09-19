import Image from 'gatsby-image';
// import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/art.module.css';
// import {FaPalette, FaPenFancy, FaApple} from 'react-icons/fa'
const Thumb = ({art}) => {

	let {collection, name, slug, description, createdAt, featured, medium, images, price} = art
	let mainImage = images[0].fluid;

const thumbTitle = collection ? `${collection + ' collection'}` : `${medium + 's'}`
const redirectLink = collection ? `${collection}` : `${medium + 's'}`


	return (
		<article className={styles.art}>
			<div className={styles.imgContainer}>
				<Image fluid={mainImage} className={styles.img} alt='single Thumb' />
				<AniLink fade className={styles.link} to={`/${redirectLink}`}>{thumbTitle}</AniLink>

			</div>
			<div className={styles.footer}>

				<h2>{thumbTitle}</h2>



			</div>
		</article>
	)
}

export default Thumb
