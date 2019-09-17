import {graphql, StaticQuery} from 'gatsby'
import React from 'react'
const getSiteData = graphql`
	query {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}`
const RegHeader = () => {
	return (<StaticQuery query={getSiteData} render={data => {
		console.log(data)
		return (<div><h1>title: {data.site.siteMetadata.title}</h1><h4>author: {data.site.siteMetadata.author}</h4></div>)

	}} />)



}

export default RegHeader
