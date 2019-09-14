import {graphql, useStaticQuery} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styles from '../../css/items.module.css';
import {Artwork} from '../Artwork';
import Title from '../StyledTitle';

const getDigitals = graphql`
query{
		featuredArt:allContentfulGallery(filter:{medium:{eq:"digital"}}){
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
								...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`

const FeaturedDigital = () => {
	const digitalsResponse = useStaticQuery(getDigitals)
	const artworks = digitalsResponse.featuredArt.edges
	return (
		<section className={styles.tours}>
			<Title title='featured' subtitle='artwork' />
			<div className={styles.center}>
				{artworks.map(({node}) => {
					return <Artwork key={node.contentful_id} art={node} />
				})}
			</div>
			<AniLink fade to='/gallery' className='btn-primary'>all artwork</AniLink>
		</section>
	)
}

export default FeaturedDigital
