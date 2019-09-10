import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from "../components/Layout";
import Title from '../components/StyledTitle';
import styles from '../css/about.module.css';

const getAbout = graphql`
query aboutImage{
  aboutImage:file(relativePath:{eq:"sifis3.jpg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default function About () {
	const {aboutImage} = useStaticQuery(getAbout)
	return (
		<Layout>
			<section className={styles.about}>
				<Title title='About Joseph Kalogerakis' subtitle='I paint and make dark digital art.' />
				<div className={styles.aboutCenter}>
					<article className={styles.aboutImg}>
						<div className={styles.imgContainer}>
							<Img fluid={aboutImage.childImageSharp.fluid} alt='awesome dragon' />
							{/* <img src={img} alt='dragon'/> */}
						</div>
					</article>
					<article className={styles.aboutInfo}>
						<h4>explore my world</h4>
						<p>They made a good decision. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?
		      </p>
						<p>I know words. I have the best words. I think the only card she has is the Lorem card. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.</p>

						<p>You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. The best taco bowls are made in Trump Tower Grill. I love Hispanics! The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.</p>
						<button type='button' className='btn-primary'>read more</button>
					</article>
				</div>

			</section>
		</Layout>
	)
}
