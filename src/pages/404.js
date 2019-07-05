import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout >
    <SEO title="404: Not found" />
    <h1>404: Page Not Found</h1>
    <p>Uh oh, looks like you've strayed out of my Portfolio, let's had back to the </p>
    <Link to='/home' />
  </Layout>
)

export default NotFoundPage
