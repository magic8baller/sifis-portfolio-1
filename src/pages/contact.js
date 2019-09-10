import {graphql} from "gatsby"
import React from 'react'
import Layout from "../components/Layout"
import Services from '../components/Services'
import StyledHero from "../components/StyledHero"
const Contact = ({data}) => {
	return (
		<Layout>
			<StyledHero img={data.defaultBcg.childImageSharp.fluid} />
			<h1>yo HOLLA@MEe</h1>
			<Services />
		</Layout>
	)
}

export default Contact

export const query = graphql`
	query {
		defaultBcg: file(relativePath: {eq: "redboxes.jpeg"}){
			childImageSharp{
				fluid(quality: 90, maxWidth: 600){
				...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
