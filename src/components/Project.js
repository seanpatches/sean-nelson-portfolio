import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './image';
import { Link } from 'gatsby';

function ProjectThumb ({ projectName, projectDescription, firstImage, secondImage, projectLink }) {
  return (
    <>
    <Link to={`/${projectName}`}>
    <h2>{projectName}</h2>
    <Image filename={firstImage} />
    </Link>
    <h3>{projectDescription}</h3>
    </>
  )};

ProjectThumb.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
}

export default ProjectThumb;