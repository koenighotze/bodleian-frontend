import './NavBar.css'

const navBar = () => (
  <header className="nav-wrapper">
    <nav className="nav">
      <div className="nav-block left">
        <a href="/" className="nav-link active skew">
          <span className="home-link-span">
            <span className="u-nav un-skew">
              <i className="fa-solid fa-book"></i>
              {} Bodleian - Digital Library
            </span>
          </span>
        </a>
      </div>
      <div className="nav-block right">
        <a href="/books" className="nav-link skew">
          <span className="nav-link-span">
            <span className="u-nav">Books</span>
          </span>
        </a>
        <a href="/contact" className="nav-link skew">
          <span className="nav-link-span">
            <span className="u-nav">Contact</span>
          </span>
        </a>
        <a href="https://github.com/koenighotze/bodleian-frontend" className="nav-link skew">
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

export default navBar
