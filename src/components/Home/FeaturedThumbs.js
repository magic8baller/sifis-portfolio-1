

import {graphql, useStaticQuery} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {Thumb, CollectionThumb} from '../Artwork';
// import Collection from '../components/Home/Collection'
import Title from '../StyledTitle';

const getThumbs = graphql`
query{
		featuredArt:allContentfulGallery(filter:{featured:{eq:true}}){
			edges{
				node{
					name
					slug
					featured
					createdAt
					medium
					contentful_id
					images{
						fluid{
								...GatsbyContentfulFluid
						}
					}
					collection
				}
			}
		}
	}
`

const FeaturedThumb = () => {
	const thumbsResponse = useStaticQuery(getThumbs)
	const artworks = thumbsResponse.featuredArt.edges
	return (
		<section className={styles.tours}>
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