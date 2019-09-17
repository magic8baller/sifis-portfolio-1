// import {graphql} from 'gatsby'
import React, { Component } from "react"
import AbstractCollection from '../components/FeaturedArt/AbstractCollection'
import Layout from "../components/Layout"

export default class Abstract extends Component {
	// console.log()
	render () {
		return (
			<Layout>
				<AbstractCollection />
			</Layout>
		)
	}
}