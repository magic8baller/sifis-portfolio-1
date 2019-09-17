import {graphql, useStaticQuery} from "gatsby";
import React from "react";
import Helmet from 'react-helmet';

const getData = graphql`
	query {
		site {
			siteMetadata {
				siteTitle: title
				siteDesc: description
				author
				siteUrl
				image
			}
		}
	}
`

const SEO = ({title, description}) => {
	const {site} = useStaticQuery(getData);
	const {
		siteDesc,
		siteTitle,
		siteUrl,
		image
	} = site.siteMetadata

	return (
		<Helmet htmlAttributes={{lang: 'en'}} title={`${title} | ${siteTitle}`}>
			<meta name="description" content={description || siteDesc} />
			<meta name="image" content={image} />
			<meta name="og:url" content={siteUrl} />
			<meta name="og:type" content="website" />
			<meta name="og:title" content={siteTitle} />
			<meta name="og:description" content={siteDesc} />
			<meta name="og:image" content={`${siteUrl}${image}`} />
			<meta name="og:image:width" content="400" />
			<meta name="og:image:height" content="300" />
		</Helmet>
	)

}


export default SEO;