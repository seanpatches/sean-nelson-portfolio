import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './image';
import styles from '../styles/dreamProjectThumb.module.css';

const dreamImageFade = [styles.firstImageContainer, styles.animated, styles.animatedFadeInRight, styles.fadeInRight].join(' ');
const dreamNameFade = [styles.animated, styles.animatedFadeInRight, styles.fadeInRight].join(' ');

function DreamProjectThumb({ name, description, firstImage, secondImage, link }) {
  return (
    <div className={styles.dreamProjectThumb}>
      <div className={styles.right}>
        <a href={link} >
          <h2 className={dreamNameFade}>{name}</h2>
          <div className={dreamImageFade}>
            <Image filename={firstImage} />
          </div>
        </a>
      </div>
      <div className={styles.left}>
        <div className={styles.description}>
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );}

DreamProjectThumb.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
};

export default DreamProjectThumb;
