const navBar = () => (
  <header className="nav-wrapper">
    <nav className="nav">
      <div className="nav-block left">
        <a href="#home" className="nav-link active skew">
          <span className="home-link-span">
            <span className="u-nav un-skew">
              <i className="fa-solid fa-book"></i>
              {} Bodleian - Digital Library
            </span>
          </span>
        </a>
      </div>
      <div className="nav-block right">
        <a href="#about" className="nav-link skew">
          <span className="nav-link-span">
            <span className="u-nav">About</span>
          </span>
        </a>
        <a href="#work" className="nav-link skew">
          <span className="nav-link-span">
            <span className="u-nav">Work</span>
          </span>
        </a>
        <a href="#contact" className="nav-link skew">
          <span className="nav-link-span">
            <span className="u-nav">Contact</span>
          </span>
        </a>
      </div>
    </nav>
  </header>
)

export default navBar
