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
