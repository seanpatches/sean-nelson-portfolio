import React from 'react';
import { Image } from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../styles/about.module.css';

const About = () => (
  <>
  <Layout>
    <SEO title="About" />
    <div className={styles.row}>
      <div className={styles.leftColumn}>
        <Image filename="presentationSean.png" />
      </div>
      <div className={styles.rightColumn}>
        <h3>
          <strong>I am a</strong> software engineer in Portland, Oregon.
        </h3>
      </div>
    </div>
  </Layout>
  </>
);

export default About;
