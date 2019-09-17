import {graphql, useStaticQuery} from 'gatsby';

export const useDigitals = () => {
	const {featuredArt} = useStaticQuery(
		graphql`
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
	)

	return featuredArt.edges
}
