import {graphql, useStaticQuery} from 'gatsby';

export const useDrawings = () => {
	const {featuredArt} = useStaticQuery(
		graphql`
			query{
				featuredArt:allContentfulGallery(filter:{collection:{eq:"drawing"}}){
					edges{
						node{
							name
							slug
							featured
							completed(formatString:"MMM YYYY")
							medium
							price
							description{
								description
							}
							contentful_id
							collection
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
	)

	return featuredArt.edges
}
