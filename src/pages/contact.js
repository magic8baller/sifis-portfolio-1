// import React from "react"
import React, {Component} from 'react'
import Layout from "../components/Layout"
import Services from '../components/Services'
const formStyle = {
	fontSize: '1.2rem',
	justifyContent: "center", textAlign: "center", margin: '0 auto', padding: '0 auto',
	position: 'relative',

	borderRadius: '3px', padding: '2rem', border: '1px solid #ccc',
}
const divStyle = {
	display: 'flex',
	justifyContent: 'center',
alignItems: 'center',
padding: '20px',
// background: '#5a7233'
}

const inputStyle = {
	width: '100%',
	fontSize: '1.2rem', marginBottom: '1rem', marginTop: '0.5rem',
}
export default class contact extends Component {
	render () {
		return (
			<Layout>
			<Services/>
			<h1 style={{textAlign: 'center'}}
			>Contact Me</h1>
			<div style={divStyle}>
				<form style={formStyle} method="post" action="#">
					<label>
						Name
						<br/>
    			<input style={inputStyle} type="text" name="name" id="name" />
					</label>
<br/>
					<label>
						Email
						<br/>
							<input style={inputStyle} type="email" name="email" id="email" />
					</label>
<br/>
					<label>
						Message
						<br/>
							<textarea style={inputStyle} name="message" id="message" rows="5" />
					</label>
					<br/>
					<button style={{fontSize: '1rem', padding: '0.3rem'}} type="submit">Send</button> <span style={{padding: '0 1rem'}}>
						<input style={{fontSize: '1rem', padding: '0.3rem'}} type="reset" value="Clear" /></span>
				</form>
			</div>

			</Layout>
		)
	}
}

// export default function contact() {
//   return <Layout>

// 	</Layout>
// }
