import Image from 'gatsby-image';
import {Link} from "gatsby";
import React from 'react';
import styles from '../../css/art.module.css';

const Thumb = ({art}) => {

	let {collection, medium, images} = art
	let mainImage = images[0].fluid;

	const thumbTitle = collection == 'abstract' ? `${collection + ' collection'}` : `${medium + 's'}`
	const redirectLink = collection == 'abstract' ? `${collection}` : `${medium + 's'}`


	return (
		<article className={styles.art}>
			<div className={styles.imgContainer}>
				<Image fluid={mainImage} className={styles.img} alt='single Thumb' />
				<Link className={styles.link} to={`/${redirectLink}`}><span className={styles.thumbTitle}>{thumbTitle}</span></Link>
			</div>
			<div className={styles.footer}>
				<h2>{thumbTitle}</h2>
			</div>
		</article>
	)
}

export default Thumb
