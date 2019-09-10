import {graphql} from 'gatsby'
import React, {Component} from "react"
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
// import Images from '../examples/Images'

export default class Tours extends Component {
	// console.log()
	render() {
		return (
			<Layout>hello from tours page!!!!!
				<StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
			</Layout>
		)
	}
}

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