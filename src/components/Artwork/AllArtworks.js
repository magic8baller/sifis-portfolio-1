import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import ArtworkList from './ArtworkList'
const getArtworks = graphql`
query {
	artworks: allContentfulGallery{
		edges{
			node{
				name
				slug
				featured
				medium
				price
				images {
					description
					fluid{
						...GatsbyContentfulFluid
					}
				}
				description{
					description
				}
				contentful_id
				createdAt
			}
		}
	}
}`
const AllArtworks = () => {
	const {artworks} = useStaticQuery(getArtworks)
	return (
		<div>
			<ArtworkList artworks={artworks} />
		</div>
	)
}

export default AllArtworks
