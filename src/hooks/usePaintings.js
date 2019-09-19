import {graphql, useStaticQuery} from 'gatsby';

export const usePaintings = () => {
	const {featuredArt} = useStaticQuery(
		graphql`
			query{
				featuredArt: allContentfulGallery(filter: {medium: {eq: "painting"}}){
					edges{
						node{
							name
							description{
								description
							}
							slug
							featured
						  createdAt(formatString:"YYYY")
							medium
							contentful_id
							images{
								description
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
	);
	return featuredArt.edges
}
