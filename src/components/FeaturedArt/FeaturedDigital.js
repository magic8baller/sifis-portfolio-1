import {Link} from "gatsby";
import React from 'react';
import styles from '../../css/items.module.css';
import {useDigitals} from '../../hooks';
import {Artwork} from '../Artwork';
import Title from '../StyledTitle';


const FeaturedDigital = () => {

	const artworks = useDigitals()
	return (
		<main className={styles.artworks}>
			<Title title='featured' subtitle='digitals' />
			<section className={styles.center}>
				{artworks.map(({node}) => {
					return <Artwork key={node.contentful_id} art={node} />
				})}
			</section>
			<Link to='/gallery/' className='btn-primary'>return to gallery</Link>
		</main>
	)
}

export default FeaturedDigital
