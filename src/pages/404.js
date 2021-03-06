import {graphql} from "gatsby";
import {Link} from "gatsby";
import React from "react";
import Banner from '../components/Banner';
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import StyledHero from "../components/StyledHero";
import styles from "../css/error.module.css";
// import img from '../images/oopsy.jpeg'


const Error = ({data}) => {
	return (
		<Layout>
			<SEO title="Error" />
			<Banner title="Uh oh..." info="No page exists at this address">
				<br />
				<StyledHero img={data.oopsy.childImageSharp.fluid}>
				</StyledHero>
				<header className={styles.error}>
					<br /><br />
					<Link to='/' className='btn-white'>
						Return to Homepage
				</Link>
				</header>
			</Banner>
			<br />
		</Layout>
	)
}
export default Error

export const query = graphql`
	query {
		oopsy: file(relativePath: {eq: "abstract-paint2.jpg"}){
			childImageSharp{
				fluid(quality: 90, maxWidth: 4160){
				...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
