import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './image';
import styles from '../styles/unwastedProjectThumb.module.css';

const unwastedImageFade = [styles.firstImageContainer, styles.animated, styles.animatedFadeInLeft, styles.fadeInLeft].join(' ');
const unwastedNameFade = [styles.animated, styles.animatedFadeInLeft, styles.fadeInLeft].join(' ');

function UnwastedProjectThumb({ name, description, firstImage, link, tech }) {
  return (
    <div className={styles.unwastedProjectThumb}>
      <div className={styles.left}>
        <a href={link} >
          <h2 className={unwastedNameFade}>{name}</h2>
          <div className={unwastedImageFade}>
            <Image filename={firstImage} />
          </div>
        </a>
      </div>
      <div className={styles.right}>
        <div className={styles.description}>
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );}

UnwastedProjectThumb.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired
};

export default UnwastedProjectThumb;
