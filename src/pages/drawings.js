import React, {Component} from "react"
import {FeaturedDrawings} from '../components/FeaturedArt'
import Layout from "../components/Layout"
// import StyledHero from '../components/StyledHero'
// import Images from '../examples/Images'
import SEO from '../components/SEO'

export default class Drawings extends Component {
	// console.log()
	render () {
		return (
			<Layout>
				<SEO title="Drawings" />
				{/* <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} /> */}
				<FeaturedDrawings />
			</Layout>
		)
	}
}
