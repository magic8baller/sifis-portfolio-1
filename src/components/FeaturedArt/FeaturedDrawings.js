
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {useDrawings} from '../../hooks';
import {Artwork} from '../Artwork';
import Title from '../StyledTitle';

const FeaturedDrawings = () => {

	const artworks = useDrawings()

	return (
		<main className={styles.artworks}>
			<Title title='featured' subtitle='artwork' />
			<section className={styles.center}>
				{artworks.map(({node}) => {
					return <Artwork key={node.contentful_id} art={node} />
				})}
			</section>
			<AniLink fade to='/gallery/' className='btn-primary'>return to gallery</AniLink>
		</main>
	)
}

export default FeaturedDrawings
