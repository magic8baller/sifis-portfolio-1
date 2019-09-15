import React from 'react';
import {FaCreditCard, FaPalette} from 'react-icons/fa';
import styles from '../css/services.module.css';
import Title from './StyledTitle';
const Services = () => {
	return (
		<section className={styles.services}>
			<Title title='artist' subtitle='services' />
			<div className={styles.center}>
				<h3><FaPalette />   Commission Artwork</h3>
				<h3><FaCreditCard />   Purchasing Inquiries</h3>
			</div>
		</section>
	)
}

export default Services
