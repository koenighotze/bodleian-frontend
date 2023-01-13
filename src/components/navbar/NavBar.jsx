import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import './NavBar.css'
import { Link } from 'react-router-dom'
import config from '../../config.mjs'
import CustomNavItem from './CustomNavItem'

const NavBar = ({ t }) => {
  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <div className="nav-block left">
          <Link to={'/'} className="nav-link active skew">
            <span className="home-link-span">
              <span className="u-nav un-skew">
                <i className="fa-solid fa-book"></i>
                {} {t('NavBar.title')}
              </span>
            </span>
          </Link>
        </div>
        <div className="nav-block right">
          <CustomNavItem to="/books" name={t('NavBar.books')} />
          <CustomNavItem to="/contact" name={t('NavBar.contact')} />
          <a href={config.ghRepository} className="nav-link skew" target="_blank" rel="noreferrer">
            <span className="nav-link-span">
              <span className="u-nav">
                <i className="fa-brands fa-github"></i>
                {} {t('NavBar.github')}
              </span>
            </span>
          </a>
        </div>
      </nav>
    </header>
  )
}

NavBar.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(NavBar)
