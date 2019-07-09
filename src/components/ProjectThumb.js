import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './image';
import { Link } from 'gatsby';
import styles from "../styles/projectThumb.module.css";


function ProjectThumb ({ name, description, firstImage, secondImage, link }) {
  return (
    <div className={styles.projectThumb}>
    <Link to={`/${name}`} >
    <h2>{name}</h2>
    <div className={styles.firstImageContainer}>
    <Image filename={firstImage} />
    </div>
    </Link>
    <h3>{description}</h3>
    </div>
  )};

ProjectThumb.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
}

export default ProjectThumb;