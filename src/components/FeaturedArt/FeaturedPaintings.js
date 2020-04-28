// import {graphql, useStaticQuery} from 'gatsby';
import {Link} from "gatsby";
import React from 'react';
import styles from '../../css/items.module.css';
import {usePaintings} from '../../hooks/usePaintings';
import {Artwork} from '../Artwork';
import Title from '../StyledTitle';

const FeaturedArt = () => {
	const artworks = usePaintings()
	return (
		<main className={styles.artworks}>
			<Title title='featured' subtitle='paintings' />
			<section className={styles.center}>
				{artworks.map(({node}) => {
					return <Artwork key={node.contentful_id} art={node} />
				})}
			</section>
			<Link to='/gallery/' className='btn-primary'>return to gallery</Link>
		</main>
	)
}


export default FeaturedArt
