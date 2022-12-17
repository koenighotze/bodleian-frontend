import PropTypes from 'prop-types'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomNavItem = ({ to, name }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname })

  const className = `nav-link skew ${isActive ? 'nav-item-active' : ''}`
  return (
    <Link to={to} className={className}>
      <span className="nav-link-span">
        <span className="u-nav">{name}</span>
      </span>
    </Link>
  )
}

CustomNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default CustomNavItem
