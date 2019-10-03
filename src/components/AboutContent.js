import React from 'react';
import styles from '../css/about.module.css';
import img from '../images/youngin.jpg';
import AboutDetails from './AboutDetails';
import Title from './StyledTitle';

export default function About () {

	return (
		<main className={styles.about}>
			<Title title='About Iosif Kalogerakis' />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<img src={img} alt='sifis drawing' />
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<p><em>Crete-based painter and digital artist who loves to explore dark perspectives.</em></p>

					<AboutDetails />
				</article>
			</div>
		</main>
	)
}
