import React from 'react';
import styles from '../css/about.module.css';
import img from '../images/itsame.jpg';
import AboutDetails from './AboutDetails';
import Title from './StyledTitle';

export default function About () {

	return (
		<section className={styles.about}>
			<Title title='About Iosif Kalogerakis' subtitle='Painter and versatile artist' />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<img src={img} alt='badassmofo' />
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>meet the artist</h4>
					<p>Describing an artist is a difficult task and I have to admit, that I would prefer if you, dear reader, would just look at the artwork itself and let <em>it</em> do the describing, not <em>me.</em></p>
					<p>
						Okay I get it, you are still here for the Information. But before I tell you the little that I know about the subject of your interest I have to confess I am not an author free of all sorts of bias, rather quite the opposite and perhaps a liar too.
						I once heard Joseph say "nothing is so common than the wish to be remarkable", err wait, no, Shakespeare said that; Joseph said something like, "when I make art, it comes from a dark place deep inside me and I can find no words to describe it".
</p>

					<AboutDetails />
				</article>
			</div>
		</section>
	)
}
