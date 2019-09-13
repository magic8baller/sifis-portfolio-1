import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
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
						...GatsbyContentfulFluid_tracedSVG
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
<ArtworkList artworks={artworks}/>
		</div>
	)
}

export default AllArtworks
