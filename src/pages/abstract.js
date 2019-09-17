// import {graphql} from 'gatsby'
import React, {Component} from "react"
import AbstractCollection from '../components/FeaturedArt/AbstractCollection'
import Layout from "../components/Layout"
import SEO from '../components/SEO'
export default class Abstract extends Component {
	// console.log()
	render () {
		return (
			<Layout>
				<SEO title="Abstract Paintings" />
				<AbstractCollection />
			</Layout>
		)
	}
}