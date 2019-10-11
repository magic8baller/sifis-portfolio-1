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
			<StyledHero img={data.portBcg.childImageSharp.fluid} alt="rethymno, crete at night" />
			<ContactForm />
		</Layout>
	)
}

export default Contact

export const query = graphql`
	query {
		portBcg: file(relativePath: {eq: "sifis11.jpg"}){
			childImageSharp{
				fluid(quality: 90, maxWidth: 4160){
				...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
