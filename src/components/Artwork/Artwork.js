import Image from 'gatsby-image';
import {Link} from "gatsby";
import PropTypes from 'prop-types';
import React from 'react';
import {FaApple, FaCalendarAlt, FaPalette, FaPencilAlt} from 'react-icons/fa';
import styles from '../../css/art.module.css';

const Artwork = ({art}) => {
	const {name, slug, completed, medium, images, collection, description: {description}} = art

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
				<Link className={styles.link} to={
					`/${collection + 's'}/${slug}`}>expand</Link>
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
