import {graphql} from "gatsby"
import React from 'react'
import ContactForm from '../components/ContactForm'
import Layout from "../components/Layout"
import Services from '../components/Services'
import StyledHero from "../components/StyledHero"
const Contact = ({data}) => {
	return (
		<Layout>
			<StyledHero img={data.contactBcg.childImageSharp.fluid} />
			<ContactForm />
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
