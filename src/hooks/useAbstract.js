import {graphql, useStaticQuery} from 'gatsby';

export const useAbstract = () => {
	const {featuredArt} = useStaticQuery(
		graphql`
			query{
					featuredArt:allContentfulGallery(filter:{collection:{eq:"abstract"}}){
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
								collection
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
			`)
	return featuredArt.edges
}