import {graphql, Link} from "gatsby";
import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import StyledHero from "../components/StyledHero";

export default ({data}) => (

	<Layout>
		<SEO title="Home" />
		<StyledHero home='true' img={data.defaultBcg.childImageSharp.fluid}>
			<Banner title='iosif kalogerakis' info='Painter and Digital Artist'>
				<Link style={{margin: '1rem'}} to='/gallery' className='btn-white'>portfolio</Link>
			</Banner>
		</StyledHero>
	</Layout>
)

export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq:"violent-violin.jpg"}){
    childImageSharp{
      fluid(quality:90,maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`