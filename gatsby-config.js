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
		},
	}, `gatsby-plugin-sass`, `gatsby-plugin-styled-components`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
}
