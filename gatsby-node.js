const path = require('path');

exports.createPages = async ({actions, graphql}) => {
	const {createPage} = actions;
	const {data} = await graphql(`
		query {
			artworks:allContentfulGallery {
				edges {
					node {
						slug
						medium
					}
				}
			}
		}
	`)
	data.artworks.edges.forEach(({node}) => {
		createPage({
			path: `/${node.medium + 's'}/${node.slug}`,
			component: path.resolve("./src/templates/artwork-template.js"),
			context: {
				slug: node.slug
			},
		})
	})
}