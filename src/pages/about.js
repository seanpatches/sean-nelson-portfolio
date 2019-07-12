import React from 'react';
import { Image } from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../styles/about.module.css';

const imageFadeUp = [styles.imageBox, styles.animated, styles.fadeInUp].join(' ');
const bioFade = [styles.animated, styles.fadeIn].join(' ');


const About = () => (
  <>
  <Layout>
    <SEO title="About" />
    <div className={styles.row}>
      <div className={styles.leftColumn}>
        <div className={imageFadeUp}>
          <Image filename="presentationSean.png" />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <h3 className={bioFade}>
        Software Engineer, lifetime learner, and lover of music. Passionate about community, transforming cumbersome data into a consumer digestible format, open source software and integrity driven journalism.
        </h3>
      </div>
    </div>
  </Layout>
  </>
);

export default About;
