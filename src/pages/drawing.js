// import {graphql} from 'gatsby'
import React, {Component} from "react"
import FeaturedDrawings from '../components/Home/FeaturedDrawings'
import Layout from "../components/Layout"
// import StyledHero from '../components/StyledHero'
// import Images from '../examples/Images'

export default class Drawings extends Component {
	// console.log()
	render () {
		return (
			<Layout>
				{/* <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} /> */}
				<FeaturedDrawings />
			</Layout>
		)
	}
}

// export const query = graphql`
// 	query {
// 		defaultBcg:file(relativePath:{eq:"sifis3.jpg"}){
// 			childImageSharp{
// 				fluid(quality:90,maxWidth:460, maxHeight:460){
// 				...GatsbyImageSharpFluid_withWebp
// 				}
// 			}
// 		}
// 	}
// `