import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { GardenSeanImage } from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sean Nelson</h1>
    <h2>Sean Nelson</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <GardenSeanImage />
    </div>
    <Link to="/work">Check Out My Work!</Link>
  </Layout>
)

export default IndexPage
