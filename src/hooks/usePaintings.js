import {graphql, useStaticQuery} from 'gatsby';

export const usePaintings = () => {
	const {featuredArt} = useStaticQuery(
		graphql`
			query{
				featuredArt: allContentfulGallery(filter: {collection: {eq: "painting"}}){
					edges{
						node{
							name
							description{
								description
							}
							slug
							featured
						  completed(formatString:"MMM YYYY")
							medium
							contentful_id
							collection
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
