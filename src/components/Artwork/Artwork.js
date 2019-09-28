import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import React from 'react';
import {FaApple, FaCalendarAlt, FaPalette, FaPencilAlt} from 'react-icons/fa';
import styles from '../../css/art.module.css';

const Artwork = ({art}) => {
	const {name, slug, completed, medium, images, description: {description}} = art

	let mainImage = images[0].fluid;
	let imageDescription = images[0].description
	let mediumIcon = <FaPalette />
	if (medium === 'digital') {
		mediumIcon = <FaApple />
	} else if (medium === 'drawing') {
		mediumIcon = <FaPencilAlt />
	}

	return (
		<article className={styles.art}>
			<div className={styles.imgContainer} >
				<Image fluid={mainImage} description={imageDescription} className={styles.img} alt='single artwork' />
				<AniLink fade className={styles.link} to={
					`/${medium + 's'}/${slug}`}>expand</AniLink>
			</div>
			<div className={styles.footer}>
				<h3>{name}</h3>
				<div className={styles.info}>
					<p className={styles.description}>
						{mediumIcon}&nbsp;<em>{description || ''}</em>
					</p>
					<div className={styles.details}>
						<p><FaCalendarAlt />&nbsp;{completed}</p>
					</div>
				</div>
			</div>
		</article>
	)
}


Artwork.propTypes = {
	art: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.object).isRequired
	})
}

export default Artwork
