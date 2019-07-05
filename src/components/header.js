import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.center}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className={styles.nav} >
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contacts</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
