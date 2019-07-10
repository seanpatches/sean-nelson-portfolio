import React from "react"
import { Link } from "gatsby"

import { unwasted, dream } from '../projectInfo';
import Layout from '../components/layout'
import SEO from '../components/seo'
import UnwastedProjectThumb from '../components/UnwastedProjectThumb';
import DreamProjectThumb from '../components/DreamProjectThumb';
import styles from '../styles/work.module.css'

const WorkPage = () => (
  <div className={styles.work}>
    <Layout>
      <SEO title="Work" />
      <div className={styles.projects} >
        <div className={styles.unwasted}>
          <UnwastedProjectThumb name={unwasted.name} description={unwasted.description} firstImage={unwasted.firstImage} secondImage={unwasted.secondImage} link={unwasted.link} />
        </div>
        <div className={styles.dream}>
          <DreamProjectThumb name={dream.name} description={dream.description} firstImage={dream.firstImage} secondImage={dream.secondImage} link={dream.link} />
        </div>
      </div>
    </Layout>
  </div>
)

export default WorkPage
