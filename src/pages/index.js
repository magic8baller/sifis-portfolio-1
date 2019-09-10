import {Link} from "gatsby"
import React from "react"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
// import About from "../components/About"
export default () => (
	<Layout>
		<Hero>
			<Banner title='joseph kalogerakis' info='Painter and Digital Artist'>
				<Link to='/gallery' className='btn-white'>portfolio</Link>
			</Banner>
		</Hero>
	</Layout>
)
