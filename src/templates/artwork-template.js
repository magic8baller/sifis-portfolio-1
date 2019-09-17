import {graphql} from "gatsby";
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from 'react';
import {FaMoneyBillWave, FaPalette} from "react-icons/fa";
import ArtInfo from "../components/Artwork/ArtInfo";
import Layout from "../components/Layout";
import SEO from '../components/SEO';
import styles from '../css/template.module.css';
const Template = ({data}) => {
	const {medium, name, images, createdAt, contentful_id, price, description: {description}, collection} = data.artworks
	console.log(data.artworks)
	let inCollection = collection ? `${collection} ${medium} collection` : `individual ${medium}`
	let aboutText = (medium === 'digital' ? `${medium} piece` : medium)
	// let desc = info ? info : description
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
									alt="single tour"
									className={styles.image}
								/>
							)
						})}
					</div>
					<h2>{name}</h2>
					<div className={styles.info}>
						<p>
							<FaMoneyBillWave className={styles.icon} />
							${price}
						</p>
						<p>
							<FaPalette className={styles.icon} />
							{inCollection}
						</p>
					</div>
					<h4>{createdAt}</h4>
					{/* <h4>duration : {days} days</h4> */}
					{/* <p className={styles.desc}>{description}</p> */}
					<h2>About This {aboutText}</h2>
					<div className={styles.journey}>
						{images.map((item, index) => {
							return <ArtInfo key={index} info={item.description} item={item} />
						})}
					</div>

					<div style={{textAlign: "center", paddingTop: "6rem"}}>

						<AniLink fade to="/gallery" className="btn-primary">
							back to gallery
          </AniLink>
						<br /><br />
						<AniLink fade to={`/${medium}`} className="btn-primary">
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