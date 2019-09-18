let activeEnv =
	process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: ${activeEnv}`)

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: 'Joseph Kalogerakis',
		description: "Explore joseph kalogerakis' artwork",
		author: "@magic8baller",
		image: "./defaultBcg.jpg",
		siteUrl: "https://iosifkalogerakis.com",
	},
	plugins: [{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `images`,
			path: `${__dirname}/src/images/`,
		}
	},
	{
		resolve: `gatsby-source-contentful`,
		options: {
			spaceId: process.env.CONTENTFUL_SPACE_ID,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
		},

	}, `gatsby-plugin-sass`, `gatsby-plugin-styled-components`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-plugin-transition-link`, `gatsby-plugin-playground`,
		`gatsby-plugin-react-helmet`
	],
}
