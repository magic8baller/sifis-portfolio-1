

import {graphql, useStaticQuery} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {Thumb} from '../Artwork';
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
								...GatsbyContentfulFluid_tracedSVG
						}
					}
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
			</div>
			<AniLink fade to='/gallery' className='btn-primary'>all artwork</AniLink>
		</section>
	)
}

export default FeaturedThumb
