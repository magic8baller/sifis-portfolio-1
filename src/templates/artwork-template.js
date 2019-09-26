import {graphql} from "gatsby";
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from 'react';
import {FaCalendarAlt, FaPalette, FaApple, FaPencilAlt} from "react-icons/fa";
import Layout from "../components/Layout";
import SEO from '../components/SEO';
import styles from '../css/template.module.css';
const Template = ({data}) => {
	const {medium, name, images, createdAt, description: {description}} = data.artworks
	let mediumIcon = <FaPalette className={styles.icon}/>
	if (medium === 'digital') {
		mediumIcon = <FaApple className={styles.icon}/>
	} else if (medium === 'drawing') {
		mediumIcon = <FaPencilAlt className={styles.icon}/>
	}
	return (
		<Layout>
			<SEO title={name} />
			<section className={styles.template}>
				<div className={styles.center}>
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
					<div className={styles.info}>
						<p>
							<FaCalendarAlt className={styles.icon} />
							{createdAt}
						</p>
						<p>
							{mediumIcon}
							{description}
						</p>
					</div>
					<div style={{textAlign: "center", paddingTop: "6rem"}}>

						<AniLink fade to="/gallery" className="btn-primary">
							back to gallery
          </AniLink>
						<br /><br />
						<AniLink fade to={`/${medium}s`} className="btn-primary">
							back to {medium}s
          </AniLink>
					</div>


				</div>
			</section>
			{/*
				<h1>{name}</h1>
				<Image key={contentful_id} alt={`${medium}: ${name}`}fluid={images[0].fluid} />
				<br />
				{createdAt} */}
		</Layout>

	)
}

export const query = graphql`
		query($slug: String!) {
			artworks:contentfulGallery(slug: {eq: $slug}) {
						name
						slug
						price
						medium
						contentful_id
						collection
						description{
							description
						}
						createdAt(formatString:"MMM YYYY")
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