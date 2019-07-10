import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { Image } from '../components/image';
import SEO from '../components/seo';
import styles from '../styles/index.module.css';
import AOS from 'aos';

AOS.init({
  duration: 1200
});

const IndexPage = () => (
  <div className={styles.index} >
    <Layout>
      <SEO title="Home" />
      <div className={styles.homeBody}>
        <Image filename="gardenSean.png" />
        <div className={styles.welcomeText}>
          <div className={styles.typeWrite} >
            <div>
              <h1>HI, I'M SEAN</h1>
            </div>
          </div>
          <br></br>
          <div data-aos="fade-up" className={styles.bio}>
            <p>Bringing programming, data, and communication together.</p>
          </div>
        </div>
        <div className={styles.workLink}>
          <Link to="/work">Check Out My Work!</Link >
        </div>
        <div className={styles.imageNav} >
          <div className={styles.linkedinLink} >
            <a href="https://www.linkedin.com/in/smnelsonn/">
              <Image filename="linked.png" />
            </a></div>
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
  </div> 
);

export default IndexPage;
