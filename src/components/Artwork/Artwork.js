import Image from 'gatsby-image';
// import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/tour.module.css';
// import {FaPalette, FaPenFancy, FaApple} from 'react-icons/fa'
import PropTypes from 'prop-types';
const Artwork = ({art}) => {

	const {name, slug, createdAt, featured, medium, images, price} = art
	const {description} = art.description
	let mainImage = images[0].fluid;
	let imageDescription = images[0].description

	return (
		<article className={styles.tour}>
			<div className={styles.imgContainer}>
				<Image fluid={mainImage} description={imageDescription} className={styles.img} alt='single artwork' />
				<AniLink fade className={styles.link} to={
					`/${slug}`}>{imageDescription}</AniLink>
			</div>
			<div className={styles.footer}>
				<h3>{name}</h3>
				<div className={styles.info}>
					<h4 className={styles.country}>
					<em>{description}</em>
					</h4>
					<div className={styles.details}>
	<h6>${price || ''}</h6>
						<h6>{createdAt || '2019'}</h6>
					</div>

					</div>

				</div>
			{/* </div>  */}
		</article>
	)
}

Artwork.propTypes = {
	art: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		// createdAt: PropTypes.,
		images: PropTypes.arrayOf(PropTypes.object).isRequired,
		price: PropTypes.number.isRequired
	})
}

export default Artwork
