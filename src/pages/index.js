import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { Image } from "../components/image";
import SEO from "../components/seo";
import styles from "../styles/index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.homeBody}>
    <Image filename="gardenSean.png" />
    <div className={styles.welcomeText}>HI, I'M SEAN</div>
    <div className={styles.workLink}>
      <Link to="/work">Check Out My Work!</Link>
      </div>
      <div className={styles.imageNav} >
        <div className={styles.linkedinLogo}>Check Out LINKED!</div>
        <div className={styles.resumeLink}>
          <a href="https://www.canva.com/design/DADerG2Gdw0/GrsTPH0CTi0gt055wH1p7g/view?utm_content=DADerG2Gdw0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
          <Image filename="pdf.png" />
          </a>
        </div>
        <div className={styles.githubLink}>
          <a href="http://www.github.com/seanpatches">
          <Image filename="githubLogo.png" />
        </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
