import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
// import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Artwork = ({art}) => {

	const {name, slug, description, featured, medium, images} = art
let mainImage = images[0].fluid;
	return (
		<article className={styles.tour}>
<div className={styles.imgContainer}>
	<Image fluid={mainImage} className={styles.img} alt='single artwork'/>
	<AniLink fade className={styles.link} to={`/gallery/${slug}`}>Expand</AniLink>
</div>
<div className={styles.footer}>
<h3>{name}</h3>
<div className={styles.info}>
	<h4 className={styles.country}>{medium}</h4>

</div>
</div>
		</article>
	)
}

export default Artwork
