import './NavBar.css'
import { Link } from 'react-router-dom'
import CustomNavItem from './CustomNavItem'

const NavBar = () => (
  <header className="nav-wrapper">
    <nav className="nav">
      <div className="nav-block left">
        <Link to={'/'} className="nav-link active skew">
          <span className="home-link-span">
            <span className="u-nav un-skew">
              <i className="fa-solid fa-book"></i>
              {} Bodleian - Digital Library
            </span>
          </span>
        </Link>
      </div>
      <div className="nav-block right">
        <CustomNavItem to="/books" name="Books" />
        <CustomNavItem to="/contact" name="Contact" />
        <a
          href="https://github.com/koenighotze/bodleian-frontend"
          className="nav-link skew"
          target="_blank"
          rel="noreferrer"
        >
          <span className="nav-link-span">
            <span className="u-nav">
              <i className="fa-brands fa-github"></i>
              {} Github
            </span>
          </span>
        </a>
      </div>
    </nav>
  </header>
)

export default NavBar
