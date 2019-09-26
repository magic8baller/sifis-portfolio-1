import {graphql} from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
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
				<AniLink style={{margin: '1rem'}} fade to='/gallery' className='btn-white'>portfolio</AniLink>
			</Banner>
		</StyledHero>
	</Layout>
)

export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq:"sifis-self.jpg"}){
    childImageSharp{
      fluid(quality:90,maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`