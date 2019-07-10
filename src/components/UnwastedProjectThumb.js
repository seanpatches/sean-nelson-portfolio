import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './image';
import styles from "../styles/unwastedProjectThumb.module.css";


function UnwastedProjectThumb ({ name, description, firstImage, secondImage, link }) {
  return (
    <div className={styles.unwastedProjectThumb}>
      <div className={styles.left}>
      <a href={link} >
        <h2>{name}</h2>
        <div className={styles.firstImageContainer}>
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
  )};

UnwastedProjectThumb.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
}

export default UnwastedProjectThumb;