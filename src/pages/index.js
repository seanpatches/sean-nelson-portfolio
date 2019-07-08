import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { GardenSeanImage, GithubLogoImage } from "../components/image";
import SEO from "../components/seo";
import styles from "../styles/index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.homeBody}>
      <GardenSeanImage />
      <img src='/Users/Sean/personal-website/sean-nelson-portfolio/src/images/githubLogo.png'></img>
      <div className={styles.welcomeText}>HI, I'M SEAN</div>
      <div className={styles.workLink}>Check Out My Work!</div>
      <div className={styles.resumeLink}>My Resume</div>
      <div className={styles.githubLink}>
      </div>
      <div className={styles.linkedinLink}>
        hey
        <GithubLogoImage />
      </div>
    </div>
  </Layout>
)

export default IndexPage
