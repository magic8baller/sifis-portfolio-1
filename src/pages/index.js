import {Link} from "gatsby"
import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
// import About from "../components/About"
export default () => (
	<Layout>
		<StyledHero>
			<Banner title='joseph kalogerakis' info='Painter and Digital Artist'>
				<Link to='/gallery' className='btn-white'>portfolio</Link>
			</Banner>
		</StyledHero>
	</Layout>
)
