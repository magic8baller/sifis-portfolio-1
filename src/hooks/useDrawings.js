import {graphql, useStaticQuery} from 'gatsby';

export const useDrawings = () => {
	const {featuredArt} = useStaticQuery(
		graphql`
			query{
				featuredArt:allContentfulGallery(filter:{medium:{eq:"drawing"}}){
					edges{
						node{
							name
							slug
							featured
							createdAt(formatString:"YYYY")
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
	)

	return featuredArt.edges
}
