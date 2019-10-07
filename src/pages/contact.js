import {graphql} from "gatsby"
import React from 'react'
import ContactForm from '../components/ContactForm'
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import StyledHero from "../components/StyledHero"
const Contact = ({data}) => {
	return (
		<Layout>
			<SEO title="Contact" />
			<StyledHero img={data.portBcg.childImageSharp.fluid} />
			<ContactForm />
		</Layout>
	)
}

export default Contact

export const query = graphql`
	query {
		portBcg: file(relativePath: {eq: "port-night-2.jpeg"}){
			childImageSharp{
				fluid(quality: 90, maxWidth: 4160){
				...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
