import {graphql, useStaticQuery} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {Artwork} from '../Artwork';
import Title from '../StyledTitle';

const getPaintings = graphql`
query{
		featuredArt:allContentfulGallery(filter:{medium:{eq:"painting"}}){
			edges{
				node{
					name
					slug
					featured
    			createdAt(formatString:"MMMM YYYY")
					medium
					price
					description{
						description
					}
					contentful_id
					images{
						description
						fluid{
								...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`

const FeaturedArt = () => {
	const paintingsResponse = useStaticQuery(getPaintings)
	const artworks = paintingsResponse.featuredArt.edges
	return (
		<section className={styles.tours}>
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
