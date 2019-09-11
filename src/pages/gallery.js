import React, {Component} from 'react';
import Layout from '../components/Layout';
import '../css/gallery.css';
import Images from '../images';
//  sifis2.jpg, sifis3.jpg, sifis4.jpg, sifis5.jpg, sifis6.jpg, sifis7.jpg, sifis8.jpg, sifis9.jpg} from '../images'
const imgStyle = {
	justifyContent: 'center',
	width: '80vw',
	margin: '3rem auto',
	display: 'grid',
	gridColumnGap: '2rem',
	gridRowGap: '2rem',
}
export default class Gallery extends Component {
	render () {
		console.log(Images.length)
		return (
			<Layout>
				<div style={imgStyle}>
					{Images.map((item, index) => {
						return (
							<div className='hover14'>
								<figure>
									<img style={{maxWidth: '70vw'}} key={index + item} src={item} alt={item} /></figure><span /></div>
						)
					}
					)}
				</div>
			</Layout>
		)
	}
}
