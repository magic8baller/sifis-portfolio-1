import {graphql} from 'gatsby'
import React, {Component} from "react"
import FeaturedArt from '../components/Home/FeaturedArt'
import Layout from "../components/Layout"
// import StyledHero from '../components/StyledHero'
// import Images from '../examples/Images'

export default class Tours extends Component {
	// console.log()
	render () {
		return (
			<Layout>
				{/* <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} /> */}
				<FeaturedArt />
			</Layout>
		)
	}
}

export const query = graphql`
	query {
		defaultBcg:file(relativePath:{eq:"sifis3.jpg"}){
			childImageSharp{
				fluid(quality:90,maxWidth:460, maxHeight:460){
				...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`