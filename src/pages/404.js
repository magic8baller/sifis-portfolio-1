import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import Banner from '../components/Banner';
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styles from "../css/error.module.css";
const Error = () => {
	return (
		<Layout>
			<SEO title="Error" />
			<header className={styles.error}>
				<Banner title='oops youve hit a dead end'>
					<AniLink fade to='/' className='btn-white'>
						Return to Homepage
				</AniLink>
				</Banner>
			</header>
		</Layout>
	)
}
export default Error