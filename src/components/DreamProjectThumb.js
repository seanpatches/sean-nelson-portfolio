import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './image';
import styles from "../styles/dreamProjectThumb.module.css";


function DreamProjectThumb ({ name, description, firstImage, secondImage, link }) {
  return (
    <div className={styles.dreamProjectThumb}>
      <div className={styles.right}>
        <a href={link} >
          <h2>{name}</h2>
          <div className={styles.firstImageContainer}>
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
  )};

DreamProjectThumb.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
}

export default DreamProjectThumb;