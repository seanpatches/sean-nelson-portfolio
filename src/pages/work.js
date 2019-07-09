import React from "react"
import { Link } from "gatsby"

import { unwasted, dream } from '../projectInfo';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectThumb from "../components/ProjectThumb";

const WorkPage = () => (
  <Layout>
    <SEO title="Page two" />
    <ProjectThumb name={unwasted.name} description={unwasted.description} firstImage={unwasted.firstImage} secondImage={unwasted.secondImage} link={unwasted.link} />
    <ProjectThumb name={unwasted.name} description={dream.description} firstImage={dream.firstImage} secondImage={dream.secondImage} link={dream.link} />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
