import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.css"

const navLinks = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Shows',
    url: '/shows'
  },
  {
    title: 'Music',
    url: 'https://soundcloud.com/user-837880494',
    isExternalLink: true,
  },
  {
    title: 'Store',
    url: '/store'
  },
]

const isActive = ({ isCurrent }) => {
  return isCurrent ? { style: { opacity: 1 } } : {}
}

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header
    className='header-container'>
      <div className='header-title-container'>
        <h1>
          <Link to="/" className='title-link'>
            {siteTitle}
          </Link>
        </h1>
      </div>
  
      <nav>
        <ul className={`nav-link-container${isMenuOpen ? ' menu-open' : ''}`}>
          {navLinks.map(({ title, url, isExternalLink }) => (
            <li key={url}>
              {isExternalLink ? (
                <a className='nav-link' href={url} target='_blank' rel='noopener noreferrer'>
                  {title}
                </a>
              ) : (
              <Link className={'nav-link'} to={url} getProps={isActive}>
                {title}
              </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
  
      <button className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>&#9776;</button>
  
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
