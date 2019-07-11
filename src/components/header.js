import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/header.module.css';

const title = 'Sean Nelson';
const Header = () => (
  <header className={styles.header}>
    <div className={styles.center}>
      <h1>
        <Link to="/">
          {title}
        </Link>
      </h1>
      <nav className={styles.nav} >
        <Link to="/about">About Me</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contacts</Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
