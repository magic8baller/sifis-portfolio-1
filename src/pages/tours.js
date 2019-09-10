import React from "react"
import Layout from "../components/Layout"
// import RegHeader from '../examples/RegHeader'
import {graphql} from 'gatsby'
import Images from '../examples/Images'
import Button from "../styled/Button"



export default function tours () {
	// console.log()
	return (<Layout>hello from tours page!!!!!
		<Images />

		<div><Button big>hello from sc button1</Button>
			<Button color='#f15025'>hello from button2</Button>
			<h1>title: </h1>
		</div></Layout>)
}

// export const query = graphql`
// 	query {
//   site {
//     siteMetadata {
//       title
//       description
//       author
//       data {
// 				name
// 				age
//       }
//     }
//   }
// }`