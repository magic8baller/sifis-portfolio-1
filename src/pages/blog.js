import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      hello from blog page<AniLink to="/">back home</AniLink>
    </Layout>
  )
}

export default blog
