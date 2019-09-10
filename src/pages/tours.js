import React, {Component} from "react"
import Layout from "../components/Layout"
import Button from "../styled/Button"
export default class tours extends Component {
	render () {
		return <Layout>hello from tours page!!!!!
		<div><Button big>hello from sc button1</Button>
				<Button color='#f15025'>hello from button2</Button>
			</div></Layout>
	}
}
