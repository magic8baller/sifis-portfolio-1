import {graphql, useStaticQuery} from 'gatsby';

export const useThumbs = () => {
	const {featuredArt} = useStaticQuery(
		graphql`
			query{
				featuredArt: allContentfulGallery(filter: {featured: {eq: true}}){
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
