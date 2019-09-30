import {graphql} from "gatsby";
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from 'react';
import Layout from "../components/Layout";
import SEO from '../components/SEO';
import styles from '../css/template.module.css';
const Template = ({data}) => {
	const {medium, name, images, collection} = data.artworks
	const redirectTitle = collection == 'abstract' ? `${collection + ' collection'}` : `${medium + 's'}`
	const redirectLink = collection == 'abstract' ? `${collection}` : `${medium + 's'}`
	return (
		<Layout>
			<SEO title={name} />
			<main className={styles.template}>
				<section className={styles.center}>
					<div className={styles.images}>
						{images.map((item, index) => {
							return (
								<Img
									key={index}
									fluid={item.fluid}
									alt="single artwork"
									className={styles.image}
								/>
							)
						})}
					</div>
					<h2>{name}</h2>
					<div style={{textAlign: "center", paddingTop: "6rem"}}>
						<AniLink fade to="/gallery" className="btn-primary">
							return to gallery
          </AniLink>
						<br /><br />
						<AniLink fade to={`/${redirectLink}`} className="btn-primary">
							return to {redirectTitle}
						</AniLink>
					</div>
				</section>
			</main>
		</Layout>

	)
}

export const query = graphql`
		query($slug: String!) {
			artworks:contentfulGallery(slug: {eq: $slug}) {
						name
						slug
						medium
						contentful_id
						collection
						description{
							description
						}
						completed(formatString:"MMM YYYY")
						images {
							description
							fluid {
								...GatsbyContentfulFluid
							}
						}

					}
		}
	`;

export default Template