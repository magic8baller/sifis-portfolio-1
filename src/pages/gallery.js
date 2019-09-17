import React from 'react';
import FeaturedThumbs from '../components/FeaturedArt/FeaturedThumbs';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Gallery = () => (
	<Layout>
		<SEO title="Art Gallery" />
		<FeaturedThumbs />
	</Layout>
)


export default Gallery;
