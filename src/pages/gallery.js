import React, {Component} from 'react';
import Layout from '../components/Layout';
import styles from '../css/tour.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import img1 from '../images/sifis1.jpg'
import img2 from '../images/sifis2.jpg'
export default class Gallery extends Component {
	render () {

		return (
			<Layout>

					<article style={{textAlign: 'center'}} className={styles.tour}>
<div className={styles.imgContainer}>

					<AniLink fade className={styles.link} to={`/gallery/drawings`}>Expand</AniLink>
				</div>
					<AniLink fade to='/drawings' className='btn-primary'>all drawings</AniLink>
					<br /><br />
					<AniLink fade to='/paintings' className='btn-primary'>all paintings</AniLink>
					<br/><br/>
					<AniLink fade to='/digital' className='btn-primary'>all digital work</AniLink>
				</article>


			</Layout>
		)
	}
}
