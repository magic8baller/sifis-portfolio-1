import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {useThumbs} from '../../hooks';
import {Thumb} from '../Artwork';
import Title from '../StyledTitle';
const FeaturedThumb = () => {

	const artworks = useThumbs()
	return (
		<section className={styles.artworks}>
			<Title title='featured' subtitle='artwork' />
			<div className={styles.center}>
				{artworks.map(({node}) => {
					return (<div><Thumb key={node.contentful_id} art={node} /></div>)
				})}
				{/* <CollectionThumb/> */}
			</div>
			<AniLink fade to='/' className='btn-primary'>return home</AniLink>
		</section>
	)
}

export default FeaturedThumb
