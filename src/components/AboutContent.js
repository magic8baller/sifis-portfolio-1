import Image from 'gatsby-image';
import React from 'react';
import styles from '../css/about.module.css';
import {useAboutImage} from '../hooks';
import Title from './StyledTitle';


export default function About () {

	const aboutImage = useAboutImage()
	const mainImage = aboutImage[0].node.images[0].fluid


	return (

		<section className={styles.about}>
			<Title title='About Joseph Kalogerakis' subtitle='Painter and versatile artist' />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<Image fluid={mainImage} alt='bad ass mofo' />
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>explore my world</h4>
					<p>They made a good decision. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?
		      </p>

					<p>You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. The best taco bowls are made in Trump Tower Grill. I love Hispanics! The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.</p>
					<button type='button' className='btn-primary'>read more</button>
				</article>
			</div>
		</section>
	)
}
