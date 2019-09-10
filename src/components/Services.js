import React from 'react';
import styles from '../css/services.module.css';
import Title from './StyledTitle';
const Services = () => {
	return (
		<section className={styles.services}>
			<Title title='artist' subtitle='services' />
			<div className={styles.center}>
				<h3>Commision Artwork</h3>
				<h3>Purchasing Inquiries</h3>
			</div>
		</section>
	)
}

export default Services
