let activeEnv =
	process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: ${activeEnv}`)

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: 'SifisPort1',
		description: "Explore joseph kalogerakis' artwork",
		author: "@magic8baller",
		data: {
			name: 'Leslie',
			age: '30'
		},
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
			accessToken: 'H98CNsm2jLy_NPoayl3yI2G7UTPMQNQ5F45Zo_lJgcQ',
		},

	}, `gatsby-plugin-sass`, `gatsby-plugin-styled-components`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-plugin-transition-link`, `gatsby-plugin-playground`],
}
