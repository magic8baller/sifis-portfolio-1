import Image from 'gatsby-image';
import {Link} from "gatsby";
import React from 'react';
import styles from '../../css/art.module.css';

const CollectionThumb = ({art}) => {
	console.log(art)

	let {name, images, collection} = art
	let mainImage = images[0].fluid;

	return (
		<article className={styles.art}>
			<div className={styles.imgContainer}>
				<Image fluid={mainImage} className={styles.img} alt='single Thumb' />
				<Link className={styles.link} to={`/${collection}`}>{collection}</Link>
			</div>
			<div className={styles.footer}>
				<h2>{name}</h2>
			</div>
		</article>
	)
}

export default CollectionThumb
