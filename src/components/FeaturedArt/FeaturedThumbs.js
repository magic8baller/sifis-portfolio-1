import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {useThumbs} from '../../hooks';
import {Thumb} from '../Artwork';
import Title from '../StyledTitle';
const FeaturedThumb = () => {

	const artworks = useThumbs()
	return (
		<main className={styles.artworks}>
			<Title title='featured' subtitle='artwork' />
			<section className={styles.center}>
				{artworks.map(({node}) => {
					return (<div key={node.contentful_id}><Thumb key={node.contentful_id} art={node} /></div>)
				})}
			</section>
			<AniLink fade to='/' className='btn-primary'>return home</AniLink>
		</main>
	)
}

export default FeaturedThumb
