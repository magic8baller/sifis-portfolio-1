import {graphql, useStaticQuery} from 'gatsby';

export const useAboutImage = () => {
	const {aboutImage} = useStaticQuery(
		graphql`
			query{
  aboutImage: allContentfulGallery(filter: {name: {eq: "me"}}) {
    edges {
      node {
        name
        slug
        images{
			description
      fluid{
        ...GatsbyContentfulFluid
			}
		}
        contentful_id
      }
    }
  }

}
`
	);
	return aboutImage.edges
}
