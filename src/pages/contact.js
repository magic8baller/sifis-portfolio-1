import {graphql} from "gatsby"
import React from 'react'
import Contact2 from '../components/Contact'
import Layout from "../components/Layout"
import Services from '../components/Services'
import StyledHero from "../components/StyledHero"
const Contact = ({data}) => {
	return (
		<Layout>
			<StyledHero img={data.contactBcg.childImageSharp.fluid} />
			<Contact2 />
			{/* <h1>yo HOLLA@MEe</h1> */}
			<Services />
		</Layout>
	)
}

export default Contact

export const query = graphql`
	query {
		contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}){
			childImageSharp{
				fluid(quality: 90, maxWidth: 4160){
				...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
