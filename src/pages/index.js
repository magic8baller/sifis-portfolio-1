import {graphql, Link} from "gatsby"
import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
// import About from "../components/About"
export default ({data}) => (

	<Layout>
		<StyledHero home='true' img={data.defaultBcg.childImageSharp.fluid}>
			<Banner title='joseph kalogerakis' info='Painter and Digital Artist'>
				<Link to='/gallery' className='btn-white'>portfolio</Link>
			</Banner>
		</StyledHero>
	</Layout>
)

export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq:"sifis3.jpg"}){
    childImageSharp{
      fluid(quality:90,maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`