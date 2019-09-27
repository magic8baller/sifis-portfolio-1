// import {graphql, useStaticQuery} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {usePaintings} from '../../hooks/usePaintings';
import {Artwork} from '../Artwork';
import Title from '../StyledTitle';

const FeaturedArt = () => {
	const artworks = usePaintings()
	return (
		<section className={styles.artworks}>
			<Title title='featured' subtitle='artwork' />
			<div className={styles.center}>
				{artworks.map(({node}) => {
					return <Artwork key={node.contentful_id} art={node} />
				})}
			</div>
			<AniLink fade to='/gallery/' className='btn-primary'>return to gallery</AniLink>
		</section>
	)
}


export default FeaturedArt