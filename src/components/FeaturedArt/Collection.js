

import {graphql, useStaticQuery} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {CollectionThumb} from '../Artwork';
import Title from '../StyledTitle';

const getThumbs = graphql`
query{
		featuredArt:allContentfulGallery(filter:{collection:{eq:"abstract"}}){
			edges{
				node{
					name
					slug
					featured
					createdAt
					medium
					contentful_id
					images{
						description
						fluid{
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
}
`

const Collection = () => {
	const thumbsResponse = useStaticQuery(getThumbs)
	const artworks = thumbsResponse.featuredArt.edges
	return (
		<section className={styles.tours}>
			<Title title='featured' subtitle='artwork' />
			<div className={styles.center}>
				{artworks.map(({node}) => {
					return (<div><CollectionThumb key={node.contentful_id} art={node} /></div>)
				})}
			</div>
			<AniLink fade to='/' className='btn-primary'>return home</AniLink>
		</section>
	)
}

export default Collection
